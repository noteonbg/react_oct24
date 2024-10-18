// src/MachineStatusList.js
import React from 'react';
import MachineStatus from './MachineStatus';
import ErrorBoundary from './ErrorBoundary';

const MachineStatusList = () => {
  const machines = [
    { id: 1, name: 'CNC Machine', status: 'Operational' },
    { id: 2, name: 'Lathe Machine', status: 'Under Maintenance' },
    { id: 3, name: '3D Printer', status: 'Operational' },
  ];

  return (
    <div>
      <h2>Machine Status</h2>
      <ul>
        {machines.map(machine => (
          <ErrorBoundary key={machine.id}>
            <MachineStatus machine={machine} />
          </ErrorBoundary>
        ))}
      </ul>
    </div>
  );
};

export default MachineStatusList;
