import React from 'react';
import { BsCart2 } from 'react-icons/bs';

export default function Cart() {
  return (
    <div className='flex items-center gap-1.5 font-medium'>
      <BsCart2 size={20} />
      <p className='mt-0.5'>Cart</p>
    </div>
  );
}
