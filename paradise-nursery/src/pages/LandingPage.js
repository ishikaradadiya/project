import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

export default function LandingPage() {
  return (
    <div className="landing" style={{ backgroundImage: "url('/images/background.jpg')" }}>
      <h1>Paradise Nursery</h1>
      <p>Welcome to Paradise Nursery, your home for beautiful houseplants.</p>
      <Link to="/products"><button>Get Started</button></Link>
    </div>
  );
}
