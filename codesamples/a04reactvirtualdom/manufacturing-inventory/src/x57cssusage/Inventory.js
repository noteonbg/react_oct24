import React from 'react';
import './MachineStatus.css';

const Inventory = () => {
  return (
    <div className="card inventory">
      <h2>Inventory Levels</h2>
      <ul>
        <li>Raw Materials: 1000 kg</li>
        <li>Components: 500 units</li>
        <li>Finished Goods: 300 units</li>
      </ul>
    </div>
  );
};

export default Inventory;
