import React, { useState } from 'react';

const BatchLogger = ({ onAddBatch }) => {
    const [batchName, setBatchName] = useState('');
    const [quantity, setQuantity] = useState('');

    const handleBatchNameChange = (e) => {
        setBatchName(e.target.value);
    };

    const handleQuantityChange = (e) => {
        setQuantity(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (batchName && quantity) {
            const newBatch = { name: batchName, qty: quantity };
            onAddBatch(newBatch); // Call the parent function
            setBatchName('');
            setQuantity('');
        } else {
            alert('Please fill in both fields');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add a New Production Batch</h2>
            <div>
                <label>
                    Batch Name:
                    <input
                        type="text"
                        value={batchName}
                        onChange={handleBatchNameChange}
                        required
                    />
                </label>
            </div>
            <div>
                <label>
                    Quantity:
                    <input
                        type="number"
                        value={quantity}
                        onChange={handleQuantityChange}
                        required
                    />
                </label>
            </div>
            <button type="submit">Log Batch</button>
        </form>
    );
};

export default BatchLogger;
