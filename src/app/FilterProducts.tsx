'use client';

import { useState } from 'react';
import RoundDropdown from './RoundDropdown';

export default function FilterProducts() {
  const [headphoneType, setHeadphoneType] = useState('Simple');
  const [price, setPrice] = useState('1000');
  const [review, setReview] = useState('Simple');
  const [color, setColor] = useState('Simple');
  const [offer, setOffer] = useState('Simple');

  return (
    <div className='mt-8 flex gap-6'>
      <RoundDropdown
        label='Headphone Type'
        options={['Classy', 'Simple', 'High Bass']}
        setValue={setHeadphoneType}
      />
      <RoundDropdown
        label='Price'
        options={['1000', '2000', '3000', '4000']}
        setValue={setPrice}
      />
      <RoundDropdown
        label='Review'
        options={['1', '2', '3', '4', '5']}
        setValue={setReview}
      />
      <RoundDropdown
        label='Color'
        options={['Black', 'White', 'Red', 'Blue']}
        setValue={setColor}
      />
      <RoundDropdown
        label='Offer'
        options={['10%', '20%', '30%', '40%']}
        setValue={setOffer}
      />
    </div>
  );
}
