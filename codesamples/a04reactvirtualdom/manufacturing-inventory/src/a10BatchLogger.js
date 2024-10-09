import React, { useState } from 'react';

const BatchLogger = () => {
    const [batchName, setBatchName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [logs, setLogs] = useState([]);

    // Synthetic event handlers
    const handleBatchNameChange = (e) => {
        setBatchName(e.target.value);
    };

    const handleQuantityChange = (e) => {
        setQuantity(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
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
            <h1>Production Batch Logger</h1>
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
        </div>
    );
};


export default BatchLogger;
/*

Synthetic Event Handling:

React wraps the native event in a synthetic event, providing a consistent interface for handling events across all browsers.
The event handler functions (handleBatchNameChange, handleQuantityChange, and handleSubmit) receive a synthetic event
 as the argument.
Event Properties:

The synthetic event provides properties such as e.target.value to access the value of the input fields.
The onChange and onSubmit attributes in the JSX bind these event handler functions to the respective input fields and form.
Preventing Default Behavior:

In the handleSubmit function, we use e.preventDefault() to prevent the default form submission behavior, which would cause a page refresh.
State Management:

We use the useState hook to manage the state for batchName, quantity, and logs, allowing us to update the UI dynamically.
Rendering:

When the user submits the form, the logged batches are displayed below, showing the name and quantity
 of each batch entered.

*/
