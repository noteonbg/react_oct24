import React from 'react';
import ProductionInput from './a10productioninput';

const Domref = () => {
    return (
        <div>
            <h1>Manufacturing Production Tracker</h1>
            <ProductionInput lineName="Line A" />
            <ProductionInput lineName="Line B" />
            <ProductionInput lineName="Line C" />
        </div>
    );
};

export default Domref;
