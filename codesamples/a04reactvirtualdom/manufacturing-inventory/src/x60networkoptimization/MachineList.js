import React from 'react';

const MachineList = ({ machines }) => {
  return (
    <div>
      {machines.map(machine => (
        <div key={machine.id} className="machine-item">
          <h2>{machine.name}</h2>
          <p>Status: {machine.status}</p>
          <p>Production: {machine.production} units</p>
        </div>
      ))}
    </div>
  );
};

export default MachineList;
