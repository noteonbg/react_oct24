import React, { useState, useCallback } from 'react';
import MedicationList from './MedicationList';

const MedicationManager = () => {
  const [medications, setMedications] = useState([]);

  /*
  const addMedication = useCallback((medication) => {
    
    setMedications((prevMedications) => [...prevMedications, medication]);
  }, []);

  */

  console.log(1);
  const addMedication = (medication)=>{setMedications((prevMedications) => [...prevMedications, medication])};

  return (
    <div>
      <h1>Medication Manager</h1>
      <MedicationList medications={medications} addMedication={addMedication} />
    </div>
  );
};

export default MedicationManager;
