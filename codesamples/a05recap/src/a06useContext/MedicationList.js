import React, { useContext } from 'react';
import { MedicationContext } from './MedicationContext';

const MedicationList = () => {
  const { medications } = useContext(MedicationContext);

  return (
    <div>
      <h2>Medication List</h2>
      <ul>
        {medications.map((med) => (
          <li key={med.id}>{med.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default MedicationList;
