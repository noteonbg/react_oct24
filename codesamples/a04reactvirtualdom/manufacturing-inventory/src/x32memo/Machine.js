import React from 'react';

const Machine = React.memo(({ name, type, status }) => {
  console.log(`Rendering: ${name}`); // Log to see when it re-renders

  return (
    <div>
      <h3>{name}</h3>
      <p>Type: {type}</p>
      <p>Status: {status}</p>
    </div>
  );
});

export default Machine;
/*

Machine Component:

The Machine component is wrapped in React.memo, which prevents
 it from re-rendering unless its props change. This is useful 
 when the parent component re-renders for reasons 
 unrelated to this specific machine.

A log statement indicates when the component is rendered,
helping you see when memoization is effective.
Machine List Component:

Manages an array of machines and their states.
A dropdown allows filtering machines by type, and the list updates accordingly.
The toggleMachineStatus function updates the status of a specific machine when the corresponding button is clicked.
Memoization Benefits:

If the filter is changed and the list is re-rendered,
only the Machine components whose props actually change will re-render. For example, if you toggle the status of a machine, only that specific Machine will re-render, 
while others will remain unchanged, improving performance.


*/