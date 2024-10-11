import React from 'react';

const Machine = ({ name, status, onStatusChange }) => {
  const handleStatusChange = (newStatus) => {
    onStatusChange(name, newStatus);
  };

  return (
    <div>
      <h2>{name}</h2>
      <p>Status: {status}</p>
      <button onClick={() => handleStatusChange('Active')}>Set Active</button>
      <button onClick={() => handleStatusChange('Inactive')}>Set Inactive</button>
    </div>
  );
};

export default Machine;
