// src/ProductDetails.js
import React, { useEffect, useState } from 'react';

const ProductDetails = () => {
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      // Simulating fetching detailed data for a product
      setDetails('Details for Product A: This is a high-quality product used in manufacturing.');
      setLoading(false);
    }, 7000); // Simulate a 7-second delay

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <div>Loading product details...</div>;
  }

  return (
    <div>
      <h2>Product Details</h2>
      <p>{details}</p>
    </div>
  );
};

export default ProductDetails;
