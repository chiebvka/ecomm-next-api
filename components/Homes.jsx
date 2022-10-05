import React from 'react';
import { useSelector } from 'react-redux';
import Hero from './Hero';
import Collection from './Collection';

const Homes = () => {
  const { products } = useSelector(state => state.allProducts);
  console.log(products);
  return (
    <div>
      <Hero />
      <Collection />
    </div>
  )
}

export default Homes