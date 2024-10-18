import React, { useContext, useState } from 'react';
import { MedicationContext } from './MedicationContext';

const AddMedication = () => {
  const { addMedication } = useContext(MedicationContext);
  const [medicationName, setMedicationName] = useState('');

  const handleAdd = () => {
    if (medicationName) {
      addMedication({ id: Date.now(), name: medicationName });
      setMedicationName(''); // Clear input field
    }
  };

  return (
    <div>
      <h2>Add Medication</h2>
      <input
        type="text"
        value={medicationName}
        onChange={(e) => setMedicationName(e.target.value)}
        placeholder="Medication Name"
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default AddMedication;
