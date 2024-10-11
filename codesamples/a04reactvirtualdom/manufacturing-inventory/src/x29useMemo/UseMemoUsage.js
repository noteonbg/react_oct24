// src/App.js
import React from 'react';
import { MachineProvider } from './MachineContext';
import TotalProductionOutput from './TotalProductionOutput';

const UseMemoUsage = () => {
  return (
    <MachineProvider>
      <h1>Manufacturing Dashboard</h1>
      <TotalProductionOutput />
    </MachineProvider>
  );
};

export default UseMemoUsage;
