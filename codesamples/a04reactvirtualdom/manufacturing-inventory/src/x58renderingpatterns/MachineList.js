import React from 'react';
import MachineItem from './MachineItem';

const MachineList = ({ machines }) => {
  return (
    <div className="machine-list">
      {machines.map((machine) => (
        <MachineItem key={machine.id} machine={machine} />
      ))}
    </div>
  );
};

export default MachineList;
