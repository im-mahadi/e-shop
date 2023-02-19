'use client';

import { Button, Card, Rating } from 'flowbite-react';
import { useState } from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

export default function ProductCard() {
  const [isLiked, setIsLiked] = useState(false);
  const [product, setProduct] = useState({
    name: 'Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport',
    price: 599,
    rating: 3,
    image:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  });

  const getRating = () => {
    const rating = [];
    for (let i = 0; i < product.rating; i++) {
      rating.push(true);
    }
    for (let i = 0; i < 5 - product.rating; i++) {
      rating.push(false);
    }
    return rating;
  };

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className='max-w-xs'>
      <div className='relative top-8 left-3'>
        {isLiked ? (
          <AiFillHeart onClick={toggleLike} color='red' />
        ) : (
          <AiOutlineHeart onClick={toggleLike} />
        )}
      </div>
      <Card
        imgAlt='Apple Watch Series 7 in colors pink, silver, and black'
        imgSrc={product.image}
      >
        <h5 className='text-md font-medium tracking-tight text-gray-900'>
          {product.name}
        </h5>
        <div className='flex items-center'>
          <Rating>
            {getRating().map((value, i) => (
              <Rating.Star key={i} filled={value} />
            ))}
          </Rating>
        </div>
        <div className='flex items-center justify-between'>
          <span className='mt-1.5 text-xl font-bold text-gray-900'>$599</span>
          <Button pill={true}>Add To Cart</Button>
        </div>
      </Card>
    </div>
  );
}
