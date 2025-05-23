import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../components/Header';
import { increaseQuantity, decreaseQuantity, deleteItem } from '../redux/cartSlice';

export default function ShoppingCartPage() {
  const items = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      <Header />
      <h2>Shopping Cart</h2>
      {items.map(item => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.name} />
          <div>{item.name}</div>
          <div>${item.price}</div>
          <div>
            <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
            {item.quantity}
            <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
          </div>
          <button onClick={() => dispatch(deleteItem(item.id))}>Delete</button>
        </div>
      ))}
      <h3>Total: ${total.toFixed(2)}</h3>
      <button>Checkout (Coming Soon)</button>
      <br />
      <a href="/products"><button>Continue Shopping</button></a>
    </>
  );
}
