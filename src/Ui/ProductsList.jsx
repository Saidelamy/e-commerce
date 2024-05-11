import ProductCard from './ProductCard';

function ProductsList({ data }) {
  return (
    <div className="grid grid-cols-4 px-5 max-lg:grid-cols-2 max-sm:grid-cols-1">
      {data?.map((item, index) => (
        <ProductCard key={index} item={item} />
      ))}
    </div>
  );
}

export default ProductsList;
