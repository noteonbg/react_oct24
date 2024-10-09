import React, { useState } from 'react';

const ProductionLine = ({ name, initialStatus }) => {
    const [status, setStatus] = useState(initialStatus);

    const toggleStatus = () => {
        setStatus(prevStatus => (prevStatus === 'Active' ? 'Inactive' : 'Active'));
    };

    return (
        <div>
            <h2>{name} Production Line</h2>
            <p>Status: {status}</p>
            <button onClick={toggleStatus}>
                {status === 'Active' ? 'Deactivate' : 'Activate'}
            </button>
        </div>
    );
};


/*

Props:

Props (short for properties) are used to pass data from a parent component to a child component.
In the App component, we pass the name and initialStatus props to each ProductionLine component.
These props are read-only and help configure the child component based on the parent's data.
State:

State is used to manage data that changes over time within a component.
In the ProductionLine component, we use the useState hook to create a state variable status, which is initialized with the initialStatus prop.
The toggleStatus function updates the state when the button is clicked, toggling the production line's status between "Active" and "Inactive".
Rendering:

Each ProductionLine displays its name and current status, along with a button to change the status.
Clicking the button updates the state, which triggers a re-render of the component to reflect the new status.


*/


export default ProductionLine;
