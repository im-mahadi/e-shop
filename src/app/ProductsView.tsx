import ProductCard from './ProductCard';

export default function ProductsView() {
  // make array of 10 numbers
  const products = Array.from(Array(10).keys());

  return (
    <div className='mt-5 grid w-full grid-cols-5 gap-8'>
      {products.map((value, i) => (
        <ProductCard key={i} />
      ))}
    </div>
  );
}
