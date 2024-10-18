import React from 'react';
import { MedicationProvider } from './MedicationContext';
import MedicationList from './MedicationList';
import AddMedication from './AddMedication';

const UseContext = () => {
  return (
    <MedicationProvider>
      <h1>Medication Management</h1>
      <AddMedication />
      <MedicationList />
    </MedicationProvider>
  );
};

export default UseContext;
