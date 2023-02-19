import FilterProducts from './FilterProducts';
import Hero from './Hero';
import ProductsView from './ProductsView';

export default function Home() {
  return (
    <div className='mx-auto w-11/12'>
      <Hero />
      <FilterProducts />
      <ProductsView />
    </div>
  );
}
