// src/MachineInfoCard.js
import React from 'react';
import './MachineInfoCard.css'; // Importing styles

const MachineInfoCard = ({ machine }) => {
  return (
    <div className="machine-card">
      <h2 className="machine-name">{machine.name}</h2>
      <p className="machine-type">Type: {machine.type}</p>
      <p className="machine-status">Status: {machine.status}</p>
      <p className="machine-description">{machine.description}</p>
    </div>
  );
};

export default MachineInfoCard;
