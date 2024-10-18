import React, { useState } from 'react';

const MedicationList = ({ medications, addMedication }) => {
  const [medication, setMedication] = useState('');

  const handleAddMedication = () => {
    if (medication) {
      addMedication(medication);
      setMedication('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={medication}
        onChange={(e) => setMedication(e.target.value)}
        placeholder="Add a medication"
      />
      <button onClick={handleAddMedication}>Add Medication</button>
      
      <h2>Current Medications</h2>
      <ol>
        {medications.map((med, index) => (
          <li key={index}>{med}</li>
        ))}
      </ol>
    </div>
  );
};

export default MedicationList;
