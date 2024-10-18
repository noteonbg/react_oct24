import React, { createContext, useState } from 'react';

// Create a context
export const MedicationContext = createContext();

// Create a provider component
export const MedicationProvider = ({ children }) => {
  const [medications, setMedications] = useState([
    { id: 1, name: 'Aspirin' },
    { id: 2, name: 'Ibuprofen' },
  ]);

  const addMedication = (medication) => {
    setMedications((prev) => [...prev, medication]);
  };

  return (
    <MedicationContext.Provider value={{ medications, addMedication }}>
      {children}
    </MedicationContext.Provider>
  );
};
