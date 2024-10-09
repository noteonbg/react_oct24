import React from 'react';

const ProductionStatus = ({ status }) => {
    return (
        <div>
            <strong>Status: </strong>
            <span>{status}</span>
        </div>
    );
};

export default ProductionStatus;
