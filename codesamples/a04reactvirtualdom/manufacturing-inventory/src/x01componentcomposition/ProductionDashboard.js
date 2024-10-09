import React from 'react';
import ProductionLine from './ProductionLine';

const ProductionDashboard = () => {
    const productionData = [
        {
            name: 'Line A',
            status: 'Active',
            logs: [
                { name: 'Batch 1', qty: 100 },
                { name: 'Batch 2', qty: 150 },
            ],
        },
        {
            name: 'Line B',
            status: 'Inactive',
            logs: [
                { name: 'Batch 1', qty: 200 },
            ],
        },
        {
            name: 'Line C',
            status: 'Active',
            logs: [],
        },
    ];

    return (
        <div>
            <hr/>
            <h1>Manufacturing Production Dashboard</h1>
            {productionData.map((line, index) => (
                <ProductionLine
                    key={index}
                    name={line.name}
                    status={line.status}
                    logs={line.logs}
                />
            ))}
        </div>
    );
};

export default ProductionDashboard;
