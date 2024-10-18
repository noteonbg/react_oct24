// src/MachineStatus.js
import React, { useState } from 'react';

const MachineStatus = ({ machine }) => {
  const [status, setStatus] = useState(machine.status);

  const toggleStatus = () => {
    setStatus(prevStatus => (prevStatus === 'Operational' ? 'Under Maintenance' : 'Operational'));
  };

  return (
    <div>
      <h3>{machine.name}</h3>
      <p>Status: {status}</p>
      <button onClick={toggleStatus}>
        {status === 'Operational' ? 'Set to Under Maintenance' : 'Set to Operational'}
      </button>
    </div>
  );
};

export default MachineStatus;
