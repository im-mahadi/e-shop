'use client';

import React from 'react';
import { IoPersonOutline } from 'react-icons/io5';

export default function Account() {
  return (
    <div className='flex items-center gap-1.5 font-medium'>
      <IoPersonOutline size={20} />
      <p className='mt-0.5'>Account</p>
    </div>
  );
}
