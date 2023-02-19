'use client';

import { Button } from 'flowbite-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className='mt-6 flex max-h-72 justify-evenly rounded-lg bg-rose-100'>
      <div className='flex flex-col items-start justify-center gap-5'>
        <p className='text-3xl font-bold text-green-800'>
          Grap Upto 50% off on <br />
          the Selected Headphone
        </p>
        <Button color='success' pill={true}>
          Buy Now
        </Button>
      </div>
      <div>
        <Image
          src='/hero.png'
          className='relative bottom-12'
          alt='hero'
          width={600}
          height={500}
        />
      </div>
    </div>
  );
}
