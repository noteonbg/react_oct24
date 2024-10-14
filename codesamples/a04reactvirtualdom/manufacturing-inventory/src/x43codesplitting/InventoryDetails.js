// src/InventoryDetails.js
import React, { useEffect, useState } from 'react';

const InventoryDetails = () => {
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      // Simulating fetching detailed data for an inventory item
      setDetails('Details for Raw Material A: This material is used in the production of widgets.');
      setLoading(false);
    }, 8000); // Simulate a 3-second delay

    return () => clearTimeout(timer);
  }, []);

  /*
  if (loading) {
    return <div>Loading inventory details...</div>;
  }
    */

  return (
    <div>
      <h2>Inventory Details</h2>
      <p>{details}</p>
    </div>
  );
};

export default InventoryDetails;
