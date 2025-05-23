import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

export default function PlantCard({ plant }) {
  const dispatch = useDispatch();
  const inCart = useSelector(state => state.cart.items.some(item => item.id === plant.id));

  return (
    <div className="card">
      <img src={plant.image} alt={plant.name} />
      <h3>{plant.name}</h3>
      <p>${plant.price}</p>
      <button disabled={inCart} onClick={() => dispatch(addToCart(plant))}>
        {inCart ? 'Added' : 'Add to Cart'}
      </button>
    </div>
  );
}
