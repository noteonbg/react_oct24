import React, { useState } from 'react';
import BatchLogger from './BatchLogger';

const CP_ProductionDashboard = () => {
    const [batches, setBatches] = useState([]);

    const addBatch = (newBatch) => {
        setBatches((prevBatches) => [...prevBatches, newBatch]); // Add new batch to the state
    };

    return (
        <div>
            <h1>Manufacturing Production Dashboard</h1>
            <BatchLogger onAddBatch={addBatch} /> {/* Pass the function as a prop */}
            <h2>Logged Batches:</h2>
            <ul>
                {batches.map((batch, index) => (
                    <li key={index}>
                        {batch.name}: {batch.qty}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CP_ProductionDashboard;
