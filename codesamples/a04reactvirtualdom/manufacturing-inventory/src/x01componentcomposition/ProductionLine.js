import React from 'react';
import ProductionStatus from './ProductionStatus';
import ProductionLog from './ProductionLog';

const ProductionLine = ({ name, status, logs }) => {
    return (
        <div className="production-line">
            <h2>{name} Production Line</h2>
            <ProductionStatus status={status} />
            <ProductionLog logs={logs} />
        </div>
    );
};

export default ProductionLine;
