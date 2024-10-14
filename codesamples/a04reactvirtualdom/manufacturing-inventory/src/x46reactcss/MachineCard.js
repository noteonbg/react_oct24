// src/components/MachineCard.js
import React from 'react';
import './MachineCard.scss'; // Importing SCSS styles

const MachineCard = ({ machine }) => {
  return (
    <div className="machine-card">
      <h3 className="machine-name">{machine.name}</h3>
      <p className="machine-status">Status: {machine.status}</p>
      <p className="machine-type">Type: {machine.type}</p>
    </div>
  );
};

export default MachineCard;
