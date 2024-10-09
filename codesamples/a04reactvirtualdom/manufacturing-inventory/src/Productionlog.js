import React, { useState } from 'react';
import ProductionLine from './ProductionLine';
import ProductionInput from './a10productioninput';
import BatchLogger from './a10BatchLogger';

/*

components can handle events like clicks, form submissions, and more. 
These events allow you to create interactive applications


*/


const ProductionLog = () => {
    const [batchName, setBatchName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [logs, setLogs] = useState([]);

    const handleBatchNameChange = (e) => {
        setBatchName(e.target.value);
    };

    const handleQuantityChange = (e) => {
        setQuantity(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent page refresh
        if (batchName && quantity) {
            const newLog = { name: batchName, qty: quantity };
            setLogs([...logs, newLog]);
            // Reset input fields
            setBatchName('');
            setQuantity('');
        } else {
            alert('Please fill in both fields');
        }
    };

    return (
        <div>
            <h1>Production Batch Logging</h1>
            <form onSubmit={handleSubmit}>
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
            <h2>Logged Batches:</h2>
            <ul>
                {logs.map((log, index) => (
                    <li key={index}>
                        {log.name}: {log.qty}
                    </li>
                ))}
            </ul>
            <hr/>    



            {/*}

            We will create a ProductionLine component that displays the name and status of a production line.
             We will use props to pass down the line's name and status from a parent component and use state 
             to manage the status updates within the ProductionLine component.

            */}

            
            <h1>Manufacturing Production Tracker</h1>
            <ProductionLine name="Line A" initialStatus="Active" />
            <ProductionLine name="Line B" initialStatus="Inactive" />
            <ProductionLine name="Line C" initialStatus="Active" />


            <hr/>
            <h1>Manufacturing Production Tracker</h1>
            <ProductionInput lineName="Line A" />
            <ProductionInput lineName="Line B" />
            <ProductionInput lineName="Line C" />

            <hr/>
            <h1> using synthetic events</h1>
            <BatchLogger/>
        

        </div>
    );
};



export default ProductionLog;
