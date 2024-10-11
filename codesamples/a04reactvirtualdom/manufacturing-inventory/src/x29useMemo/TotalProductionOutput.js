// src/TotalProductionOutput.js
import React, { useMemo } from 'react';
import { useMachine } from './MachineContext';

const TotalProductionOutput = () => {
  const { machines } = useMachine();

  // Memoizing the total production calculation
  const totalProduction = useMemo(() => {
    console.log('Calculating total production...');
    return machines.reduce((total, machine) => total + machine.productionRate, 0);
  }, [machines]);

  /*
The useMemo hook is used to calculate the total production output.
 This calculation only re-runs when the machines array changes.
  */

  return (
    <div>
      <h2>Total Production Output</h2>
      <p>{totalProduction}</p>
    </div>
  );
};

export default TotalProductionOutput;
