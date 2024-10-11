// src/MachineList.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleStatus, addMachine } from './machinesSlice';

const MachineList = () => {
  const dispatch = useDispatch();
  const machines = useSelector((state) => state.machines);

  const handleToggle = (id) => {
    dispatch(toggleStatus(id));
  };

  const handleAddMachine = () => {
    const newMachine = { id: machines.length + 1, name: `Machine ${String.fromCharCode(67 + machines.length)}`, status: 'Active' };
    dispatch(addMachine(newMachine));
  };

  return (
    <div>
      <ul>
        {machines.map((machine) => (
          <li key={machine.id}>
            {machine.name} - Status: {machine.status}
            <button onClick={() => handleToggle(machine.id)}>Toggle Status</button>
          </li>
        ))}
      </ul>
      <button onClick={handleAddMachine}>Add Machine</button>
    </div>
  );
};

export default MachineList;

/*

useDispatch and useSelector:
useDispatch: This hook provides a way to dispatch actions 
to the store.

useSelector: This hook selects the desired piece of state 
from the store (in this case, the list of machines).

handleToggle: This function dispatches the toggleStatus 
action when the button is clicked, 
toggling the status of the machine.

handleAddMachine: This function creates a new machine object
 and dispatches the addMachine action to add it to the state.

Rendering: The component maps over the machines array and displays each machine's name and status, with a button to toggle its status. 
It also provides a button to add a new machine.

Summary of the Example
This Redux Toolkit example illustrates how to manage a simple inventory of machines in a manufacturing context. Key functionalities include:

State Management: The Redux store manages the state of the machines, allowing easy updates and access to machine data across components.
Action Dispatching: Components can dispatch actions to update the state (toggle machine status, add new machines).
Separation of Concerns: By using slices and reducers, the application maintains a clear separation of business logic and UI.



*/
