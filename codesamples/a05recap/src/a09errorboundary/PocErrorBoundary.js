// src/App.js
import React from 'react';
import MachineStatusList from './MachineStatusList';

function PocErrorBoundary() {
  return (
    <div>
      <h1>Manufacturing Machine Management</h1>
      <MachineStatusList />
    </div>
  );
}

export default PocErrorBoundary;
