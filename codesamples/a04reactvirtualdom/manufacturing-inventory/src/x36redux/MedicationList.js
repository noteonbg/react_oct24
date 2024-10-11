// src/components/MedicationList.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMedication, removeMedication } from './medicationSlice';

const MedicationList = () => {
  const [medName, setMedName] = useState('');
  const dispatch = useDispatch();
  const medications = useSelector((state) => state.medications);

  const handleAddMedication = () => {
    if (medName.trim()) {
      dispatch(addMedication({ id: Date.now(), name: medName }));
      setMedName('');
    }
  };

  const handleRemoveMedication = (id) => {
    dispatch(removeMedication(id));
  };

  useEffect(() => {
    // This effect could be used for side-effects, like logging
    console.log('Current medications:', medications);
  }, [medications]);

  return (
    <div>
      <h1>Medication List</h1>
      <input
        type="text"
        value={medName}
        onChange={(e) => setMedName(e.target.value)}
        placeholder="Enter medication name"
      />
      <button onClick={handleAddMedication}>Add Medication</button>
      <ul>
        {medications.map((med) => (
          <li key={med.id}>
            {med.name} <button onClick={() => handleRemoveMedication(med.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MedicationList;
