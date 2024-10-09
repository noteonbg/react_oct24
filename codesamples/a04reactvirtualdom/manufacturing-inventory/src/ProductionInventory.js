import React, { useState } from 'react';

const ProductionInventory = () => {
    const [inventory, setInventory] = useState([]);
    const [itemCount, setItemCount] = useState(0);

    const addItem = () => {
        setItemCount(itemCount + 1);
        setInventory([...inventory, `Item ${itemCount + 1}`]);
    };

    const removeItem = () => {
        if (itemCount > 0) {
            setItemCount(itemCount - 1);
            setInventory(inventory.slice(0, -1));
        }
    };

    console.log('ProductionInventory rendered with items:', inventory);

    return (
        <div>
            <h1>Production Inventory</h1>
            <h2>Total Items: {itemCount}</h2>
            <ul>
                {inventory.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <button onClick={addItem}>Add Item</button>
            <button onClick={removeItem}>Remove Item</button>
        </div>
    );
};

export default ProductionInventory;
