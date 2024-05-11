import CommonSection from '../../Ui/CommonSection';
import { IoSearchOutline } from 'react-icons/io5';
import './Shop.css';
import { useState } from 'react';
import products from './../../assets/data/products';
import ProductsList from './../../Ui/ProductsList';
function Shop() {
  const [productsData, setProductsData] = useState(products);

  const hanldeFilter = (e) => {
    const filtervalue = e.target.value;
    if (filtervalue === 'sofa') {
      const filterdProducts = products.filter(
        (item) => item.category === 'sofa',
      );
      setProductsData(filterdProducts);
    }
    if (filtervalue === 'mobile') {
      const filterdProducts = products.filter(
        (item) => item.category === 'mobile',
      );
      setProductsData(filterdProducts);
    }
    if (filtervalue === 'chair') {
      const filterdProducts = products.filter(
        (item) => item.category === 'chair',
      );
      setProductsData(filterdProducts);
    }
    if (filtervalue === 'watch') {
      const filterdProducts = products.filter(
        (item) => item.category === 'watch',
      );
      setProductsData(filterdProducts);
    }
    if (filtervalue === 'wireless') {
      const filterdProducts = products.filter(
        (item) => item.category === 'wireless',
      );
      setProductsData(filterdProducts);
    }
  };

  const handleSearch = (e) => {
    const searchItem = e.target.value;
    const searchedProducts = products.filter((item) =>
      item.productName.toLowerCase().includes(searchItem.toLowerCase()),
    );
    setProductsData(searchedProducts);
  };
  return (
    <>
      <CommonSection title="Products" />

      <section>
        <div className="container m-auto">
          <div className="grid grid-cols-12 ">
            <div className="col-span-3 max-sm:col-span-6 max-sm:m-auto">
              <div className="filter_widgt">
                <select
                  onChange={hanldeFilter}
                  className="cursor-pointer rounded-md border border-primary bg-primary px-5 py-2.5  text-white outline-none"
                >
                  <option>filter by category</option>
                  <option value="sofa">Sofa</option>
                  <option value="mobile">Mobile</option>
                  <option value="chair">Chair</option>
                  <option value="watch">Watch</option>
                  <option value="wireless">Wireless</option>
                </select>
              </div>
            </div>
            <div className="col-span-3">
              <div className="filter_widgt">
                <select className="cursor-pointer rounded-md border border-primary bg-primary px-5 py-2.5 text-white outline-none ">
                  <option>sort by category</option>
                  <option value="ascending">Acsending</option>
                  <option value="decsending">Decsending</option>
                </select>
              </div>
            </div>
            <div className="col-span-6 w-[100%] max-sm:col-span-12 max-sm:mt-6">
              <div className="search_box  flex content-between items-center rounded-md border border-primary px-5 ">
                <input
                  onChange={handleSearch}
                  type="text"
                  className=" w-[100%] px-2 py-2.5 outline-none"
                  placeholder="search...."
                />
                <span className="text-primary">
                  <IoSearchOutline />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-0">
        <div className="container m-auto">
          <div className="grid">
            {productsData.length === 0 ? (
              <h1 className="text-primary">No products are found!</h1>
            ) : (
              <ProductsList data={productsData} />
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default Shop;
