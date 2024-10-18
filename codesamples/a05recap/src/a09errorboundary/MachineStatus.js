// src/MachineStatus.js
import React from 'react';

const MachineStatus = ({ machine }) => {
  // Simulate an error for a specific machine
  if (machine.id === 2) {
    throw new Error('Simulated error for machine: ' + machine.name);
  }

  return (
    <li>
      {machine.name}: {machine.status}
    </li>
  );
};

export default MachineStatus;
