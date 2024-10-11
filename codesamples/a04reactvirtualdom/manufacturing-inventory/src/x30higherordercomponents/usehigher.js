import React from 'react';
import Machine from './Machine';
import withLogging from './withLogging';

const LoggedMachine = withLogging(Machine);

const HigherOrderComp = () => {
  const machineData = {
    name: 'Machine A',
    type: 'CNC',
    status: 'Active',
  };

  return (
    <div>
      <h1>Manufacturing Dashboard</h1>
      <LoggedMachine {...machineData} />
    </div>
  );
};

export default HigherOrderComp;
