// src/ProductList.js
import React, { useEffect, useState } from 'react';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      // Simulating fetching data from a server
      setProducts([
        { id: 1, name: 'Product A' },
        { id: 2, name: 'Product B' },
        { id: 3, name: 'Product C' },
      ]);
      setLoading(false);
    }, 3000); // Simulate a 2-second delay

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <div>Loading product list...</div>;
  }

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
