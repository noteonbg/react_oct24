// src/MachineList.js
import React from 'react';

//npm test -- --coverage
//mpm test..

const MachineList = ({ machines }) => {
  if (!machines || machines.length === 0) {
    return <div>No machines available.</div>;
  }

  return (
    <div>
      <h2>Machine List</h2>
      <ul>
        {machines.map(machine => (
          <li key={machine.id}>
            {machine.name}: {machine.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MachineList;
