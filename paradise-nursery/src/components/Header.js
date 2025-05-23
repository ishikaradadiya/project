import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Header() {
  const items = useSelector(state => state.cart.items);
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header>
      <h1>Paradise Nursery</h1>
      <nav>
        <Link to="/products">Products</Link>
        <Link to="/cart">🛒 ({totalItems})</Link>
      </nav>
    </header>
  );
}
