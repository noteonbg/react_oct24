// src/MachineContext.js
import React, { createContext, useContext, useState } from 'react';

const MachineContext = createContext();

export const MachineProvider = ({ children }) => {
  const [machines, setMachines] = useState([
    { id: 1, name: 'Machine A', productionRate: 100 },
    { id: 2, name: 'Machine B', productionRate: 150 },
    { id: 3, name: 'Machine C', productionRate: 200 },
  ]);

  return (
    <MachineContext.Provider value={{ machines }}>
      {children}
    </MachineContext.Provider>
  );
};

export const useMachine = () => useContext(MachineContext);
