// src/MachineDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';

const MachineDetails = () => {
  const { id } = useParams();
  
  return (
    <div>
      <h2>Machine Details</h2>
      <p>Details for Machine ID: {id}</p>
      {/* In a real application, you would fetch and display more details about the machine */}
    </div>
  );
};

export default MachineDetails;
