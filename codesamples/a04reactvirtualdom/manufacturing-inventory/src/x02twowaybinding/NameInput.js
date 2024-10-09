import React, { useState } from 'react';

const NameInput = () => {
    const [name, setName] = useState('');

    const handleChange = (e) => {
        setName(e.target.value); // Update state with input value
    };

    return (
        <div>
            <h1>Two-Way Data Binding Example</h1>
            <input
                type="text"
                value={name}        // Controlled input
                onChange={handleChange} // Event handler
                placeholder="Enter your name"
            />
            <h2>Your name is: {name}</h2>
        </div>
    );
};

export default NameInput;
