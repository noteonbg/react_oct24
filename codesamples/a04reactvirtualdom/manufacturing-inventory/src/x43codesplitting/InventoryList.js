// src/InventoryList.js
import React, { useEffect, useState } from 'react';

const InventoryList = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      // Simulating fetching inventory data
      setItems([
        { id: 1, name: 'Raw Material A' },
        { id: 2, name: 'Raw Material B' },
        { id: 3, name: 'Finished Product A' },
      ]);
      setLoading(false);
    }, 10000); // Simulate a 2-second delay

    return () => clearTimeout(timer);
  }, []);

  /*
  if (loading) {
    return <div>Loading inventory list...</div>;
  }
    */

  return (
    <div>
      <h2>Inventory List</h2>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default InventoryList;
