import React from 'react';
import './MachineStatus.css';

const MachineStatus = () => {
  return (
    <div className="card machine-status">
      <h2>Machine Status</h2>
      <ul>
        <li>Machine A: Running</li>
        <li>Machine B: Stopped</li>
        <li>Machine C: Running</li>
      </ul>
    </div>
  );
};

export default MachineStatus;
