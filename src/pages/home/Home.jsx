import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import heroImg from '../../assets/images/hero-img.png';
import Services from '../../services/Services';
import ProductsList from '../../Ui/ProductsList';
import products from './../../assets/data/products';

import counterImage from '../../assets/images/counter-timer-img.png';
import Clock from '../../Ui/Clock';
function Home() {
  const [trendingProduct, setTrendingProduct] = useState([]);
  const [bestSalesProduct, setBestSalesProduct] = useState([]);
  const [mobileProduct, setMobileProduct] = useState([]);
  const [wirelessProduct, setWirelessProduct] = useState([]);
  const [popularProduct, setPopularProduct] = useState([]);

  const year = new Date().getFullYear();

  useEffect(() => {
    const filterdTrendingProducts = products.filter(
      (item) => item.category === 'chair',
    );
    const filterdBestSalesProducts = products.filter(
      (item) => item.category === 'sofa',
    );
    const filterdMobileProducts = products.filter(
      (item) => item.category === 'mobile',
    );
    const filterdWirelessProducts = products.filter(
      (item) => item.category === 'wireless',
    );
    const filterdPopularProduct = products.filter(
      (item) => item.category === 'watch',
    );
    setTrendingProduct(filterdTrendingProducts);
    setBestSalesProduct(filterdBestSalesProducts);
    setMobileProduct(filterdMobileProducts);
    setWirelessProduct(filterdWirelessProducts);
    setPopularProduct(filterdPopularProduct);
  }, []);

  return (
    <>
      <section className=" bg-[var(--hero-bg)]">
        <div className="container m-auto mt-12">
          <div className="grid grid-cols-2 max-md:grid-cols-1 max-md:px-10">
            <div className="">
              <p className="text-primary">Treanding product in {year}</p>
              <h2 className="my-[20px] text-5xl font-semibold capitalize text-primary max-lg:text-[2rem] max-md:text-[1.6rem]">
                Make your interior more minimalistic & modern
              </h2>
              <p className="leading-7 text-primary max-md:text-[1.1rem]">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
                impedit perspiciatis ipsum sit facere sed earum, magnam incidunt
                molestiae natus!
              </p>
              <button className="mt-7 rounded-md bg-primary px-6 py-3 text-lg uppercase text-white outline-none max-md:mb-10">
                <Link to="/shop">shop now</Link>
              </button>
            </div>
            <div>
              <img src={heroImg} alt="" />
            </div>
          </div>
        </div>
      </section>
      <Services />
      <section>
        <div className="container m-auto">
          <div className="grid grid-cols-1">
            <h2 className="text-center font-semibold text-primary">
              Trending Products
            </h2>
          </div>
          <ProductsList data={trendingProduct} />
        </div>
      </section>
      <section>
        <div className="container m-auto">
          <div className="grid grid-cols-1">
            <h2 className="text-center font-semibold text-primary">
              Best Sales
            </h2>
          </div>
          <ProductsList data={bestSalesProduct} />
        </div>
      </section>

      {/* section timer count */}

      <section className="bg-[#6495ED] p-0">
        <div className="container m-auto">
          <div className="grid grid-cols-2 max-md:grid-cols-1 max-md:p-5">
            <div className="flex flex-col items-start  justify-center text-white max-md:items-center max-md:text-center max-md:text-base">
              <div className="max-md:p-5 ">
                <h4 className="font-semibold ">Limited Offers</h4>
                <h3 className="text-xl font-bold">Quality Armchair</h3>
              </div>
              <Clock />
              <button className="mt-3 rounded-2xl bg-white p-3 text-primary">
                <Link to="/shop">Visit Store</Link>
              </button>
            </div>
            <div className="flex items-end justify-end max-md:hidden">
              <img
                src={counterImage}
                className="content h-[70%] w-[70%] object-contain"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container m-auto">
          <div className="">
            <h2 className=" mb-5 text-center font-semibold text-primary">
              New Arrivals
            </h2>
          </div>
          <ProductsList data={mobileProduct} />
          <ProductsList data={wirelessProduct} />
        </div>
      </section>

      <section>
        <div className="container m-auto ">
          <div className="">
            <h2 className="mb-5  text-center font-semibold text-primary">
              Popular in Category
            </h2>
          </div>
          <ProductsList data={popularProduct} />
        </div>
      </section>
    </>
  );
}

export default Home;
