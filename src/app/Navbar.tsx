import Image from 'next/image';
import Link from 'next/link';
import Account from './Account';
import Cart from './Cart';
import Categories from './Categories';
import SearchWtIcon from './SearchWtIcon';

export default function Navbar() {
  return (
    <main className='mx-auto mt-5 flex w-11/12 items-center justify-between'>
      <div className='flex items-center gap-2 text-cyan-600'>
        <Image src='/shop.png' alt='logo' width={32} height={32} />
        <p className='text-lg font-semibold'>E-shop</p>
      </div>
      <div className='flex items-center gap-8 font-medium'>
        <Categories />
        <Link href='/'>Deals</Link>
        <Link href='/'>What&apos;s New</Link>
        <Link href='/'>Delivery</Link>
      </div>
      <div className='flex items-center gap-8'>
        <SearchWtIcon />
        <Account />
        <Cart />
      </div>
    </main>
  );
}
