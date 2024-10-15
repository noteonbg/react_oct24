import React from 'react';
import './MachineStatus.css';

const ProductionStats = () => {
  return (
    <div className="card production-stats">
      <h2>Production Stats</h2>
      <p>Total Units Produced: 1500</p>
      <p>Defective Units: 25</p>
      <p>Production Rate: 300 units/hour</p>
    </div>
  );
};

export default ProductionStats;
