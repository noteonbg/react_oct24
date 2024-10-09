import React, { useRef, useEffect } from 'react';

const ProductionInput = ({ lineName }) => {
    const inputRef = useRef(null);

    useEffect(() => {
        // Focus the input field when the component mounts
        inputRef.current.focus();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const quantity = inputRef.current.value;
        alert(`Quantity for ${lineName}: ${quantity}`);
        inputRef.current.value = ''; // Clear input after submission
    };

    return (
        <div>
            <h2>{lineName} Production Line</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Quantity Produced:
                    <input type="number" ref={inputRef} required />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

/*
In the ProductionInput component, we create a ref using useRef(). This ref (inputRef) will be attached to the input field.

The useEffect hook is used to focus the input field when the component mounts. inputRef.current.focus() is called 
to set focus on the input element.

The handleSubmit function prevents the default form submission behavior, retrieves the value from the input using the ref, displays an alert with the production quantity, and then clears the input field.

The ProductionInput component takes lineName as a prop and displays a form for entering the quantity produced for that specific production line.

Using refs in React allows you to directly interact with DOM nodes,
 which can be useful in scenarios where you need to manage focus, play media, or measure elements directly. 

*/


export default ProductionInput;
