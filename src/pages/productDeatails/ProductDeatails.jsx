import React, { useEffect, useRef, useState } from 'react';
import CommonSection from '../../Ui/CommonSection';
import { useParams } from 'react-router-dom';
import products from '../../assets/data/products';
import { FaStar } from 'react-icons/fa';
import { IoStarHalfOutline } from 'react-icons/io5';
import ProductsList from './../../Ui/ProductsList';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../redux/CartSlice';
import { toast } from 'react-toastify';

function ProductDeatails() {
  const { id } = useParams();

  const product = products.find((item) => item.id === id);
  const [tab, setTab] = useState('desc');
  const [rating, setRating] = useState(null);
  const reviewUser = useRef('');
  const reviewMsg = useRef('');
  const dispatch = useDispatch();

  const {
    imgUrl,
    productName,
    price,
    avgRating,
    reviews,
    description,
    shortDesc,
    category,
  } = product;

  const relatedProducts = products.filter((item) => item.category === category);

  const submitHandler = (e) => {
    e.preventDefault();
    const reviewUserName = reviewUser.current.value;
    const reviewUserMsg = reviewMsg.current.value;

    const reviewObj = {
      userName: reviewUserName,
      text: reviewUserMsg,
      rating,
    };
    console.log(reviewObj);
    toast.success('Review submitted');
  };

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        image: imgUrl,
        productName,
        price,
      }),
    );

    toast.success('Product add to cart successfully');
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  return (
    <>
      <CommonSection title={productName} />
      <section className="pt-0">
        <div className="container m-auto">
          <div className="grid grid-cols-12">
            <div className="col-span-6">
              <img src={imgUrl} alt={productName} />
            </div>

            <div className="col-span-6 flex flex-col items-start justify-center">
              <h2 className="text-3xl text-primary">{productName}</h2>
              <div className="my-3 flex items-center gap-2">
                <span className="text-orange-500">
                  <FaStar />
                </span>
                <span className="text-orange-500">
                  <FaStar />
                </span>
                <span className="text-orange-500">
                  <FaStar />
                </span>
                <span className="text-orange-500">
                  <FaStar />
                </span>
                <span className="text-orange-500">
                  <IoStarHalfOutline />
                </span>
                <p className="font-bold text-primary">
                  <span className=" text-orange-500">{avgRating} </span>
                  rating
                </p>
              </div>
              <p className="text-3xl font-bold text-primary">${price}</p>
              <p className="my-1 font-semibold text-slate-500">
                Categoty: {category.toUpperCase()}
              </p>
              <p className="my-3">{shortDesc}</p>
              <button
                onClick={addToCart}
                className="bg-primary px-3 py-2 text-white"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container m-auto">
          <div className="grid grid-cols-1">
            <div className="flex gap-5">
              <h6
                onClick={() => setTab('desc')}
                className={`${tab === 'desc' ? ' active_link' : ''} cursor-pointer`}
              >
                Description
              </h6>
              <h6
                onClick={() => setTab('rev')}
                className={`${tab === 'rev' ? 'active_link' : ''} cursor-pointer`}
              >
                Reviews ({reviews.length})
              </h6>
            </div>

            {tab === 'desc' ? (
              <div className="mt-3 text-gray-400 ">{description}</div>
            ) : (
              <>
                <div className="mt-3">
                  <div>
                    <ul>
                      {reviews?.map((item, index) => (
                        <li key={index}>
                          <span className="my-5">
                            <h6>Said Magdy</h6>
                            <span className=" font-bold text-orange-500">
                              {item.rating} rating
                            </span>{' '}
                          </span>
                          <p>{item.text}</p>
                        </li>
                      ))}
                    </ul>

                    <div className="review_form m-auto mt-12 w-[70%]">
                      <h4 className="">Leave your experience</h4>
                      <form onSubmit={submitHandler} action="" className="">
                        <div className="my-5">
                          <input
                            ref={reviewUser}
                            className="w-full"
                            type="text"
                            placeholder="Enter Name"
                          />
                        </div>
                        <div className="my-5 flex gap-5">
                          <span
                            onClick={() => setRating(1)}
                            className="flex cursor-pointer items-center gap-1 text-orange-500"
                          >
                            1<FaStar />
                          </span>
                          <span
                            onClick={() => setRating(2)}
                            className=" flex cursor-pointer items-center gap-1 text-orange-500"
                          >
                            2<FaStar />
                          </span>
                          <span
                            onClick={() => setRating(3)}
                            className="flex cursor-pointer items-center gap-1 text-orange-500"
                          >
                            3<FaStar />
                          </span>
                          <span
                            onClick={() => setRating(4)}
                            className="flex cursor-pointer items-center gap-1 text-orange-500"
                          >
                            4<FaStar />
                          </span>
                          <span
                            onClick={() => setRating(5)}
                            className="flex cursor-pointer items-center gap-1 text-orange-500"
                          >
                            5<FaStar />
                          </span>
                        </div>
                        <div className="my-5">
                          <textarea
                            ref={reviewMsg}
                            type="text"
                            className="w-full border-primary"
                            rows={3}
                            placeholder="Review Message..."
                          />
                        </div>
                        <button className="bg-primary px-3 py-2 text-white">
                          Submit
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
          <div className="grid grid-cols-1">
            <h2>You might also like</h2>
          </div>
          <ProductsList data={relatedProducts} />
        </div>
      </section>
    </>
  );
}

export default ProductDeatails;
