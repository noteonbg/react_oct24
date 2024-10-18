import React from 'react';

const ProductionStats = ({ totalUnits }) => {
  return (
    <div className="production-stats">
      <h2>Total Production: {totalUnits} units</h2>
    </div>
  );
};

export default ProductionStats;
