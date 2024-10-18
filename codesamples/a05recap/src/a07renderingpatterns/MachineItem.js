import React from 'react';

const MachineItem = React.memo(({ machine }) => {
  return (
    <div className="machine-item">
      <h2>{machine.name}</h2>
      <p>Status: {machine.status}</p>
      <p>Production: {machine.production} units</p>
    </div>
  );
});

export default MachineItem;
