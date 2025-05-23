import React from 'react';
import Header from '../components/Header';
import PlantCard from '../components/PlantCard';

const plants = [
  { id: 1, name: 'Fiddle Leaf Fig', price: 25, image: '/images/plant1.jpg', category: 'Indoor' },
  { id: 2, name: 'Snake Plant', price: 18, image: '/images/plant2.jpg', category: 'Succulent' },
  { id: 3, name: 'Peace Lily', price: 22, image: '/images/plant3.jpg', category: 'Flowering' },
  // add 3 more
];

export default function ProductListingPage() {
  return (
    <>
      <Header />
      <h2>Our Plants</h2>
      <div className="product-grid">
        {plants.map(plant => (
          <PlantCard key={plant.id} plant={plant} />
        ))}
      </div>
    </>
  );
}
