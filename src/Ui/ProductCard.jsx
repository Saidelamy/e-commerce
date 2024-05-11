import React from 'react';
import { CiCirclePlus } from 'react-icons/ci';
import { useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';
import { cartActions } from '../redux/CartSlice';
import { toast } from 'react-toastify';

function ProductCard({ item }) {
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id: item.id,
        productName: item.productName,
        price: item.price,
        imgUrl: item.imgUrl,
      }),
    );
    toast.success('product added successfully');
    // alert('said');
  };

  return (
    <>
      <div className="cursor-pointer  p-2">
        <div>
          <div className="max-sm:m-auto max-sm:w-[60%]">
            <img src={item.imgUrl} alt="" />
          </div>
          <h3 className="mt-3 text-lg font-semibold text-primary">
            <Link to={`/shop/${item.id}`}>{item.productName}</Link>
          </h3>
          <span className=" text-slate-500">{item.category}</span>
          <div className="flex items-center justify-between">
            <span className="text-xl font-medium text-primary ">
              {item.price}
            </span>
            <span
              className="rounded-full bg-primary p-1 text-xl text-white"
              onClick={addToCart}
            >
              <CiCirclePlus />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
