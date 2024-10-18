import React, { useState } from 'react';

const MedicationManager = () => {
  const [medications, setMedications] = useState([]);
  const [medicationName, setMedicationName] = useState('');
  const [error, setError] = useState('');

  const handleAddMedication = () => {
    if (!medicationName) {
      setError('Medication name is required');
      return;
    }
    setMedications((prev) => [...prev, { id: Date.now(), name: medicationName }]);
    setMedicationName('');
    setError('');
  };

  const handleDeleteMedication = (id) => {
    setMedications((prev) => prev.filter((med) => med.id !== id));
  };

  return (
    <div>
      <h1>Medication Manager</h1>
      <input
        type="text"
        value={medicationName}
        onChange={(e) => setMedicationName(e.target.value)}
        placeholder="Enter medication name"
      />
      <button onClick={handleAddMedication}>Add Medication</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <h2>Medications List</h2>
      <ul>
        {medications.map((med) => (
          <li key={med.id}>
            {med.name}
            <button onClick={() => handleDeleteMedication(med.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MedicationManager;
