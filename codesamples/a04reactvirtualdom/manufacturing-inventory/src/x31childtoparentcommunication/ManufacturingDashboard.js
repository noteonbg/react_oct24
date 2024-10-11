import React, { useState } from 'react';
import Machine from './machine';

const ManufacturingDashboard = () => {
  const [machines, setMachines] = useState([
    { name: 'Machine A', status: 'Inactive' },
    { name: 'Machine B', status: 'Inactive' },
  ]);

  const handleStatusChange = (machineName, newStatus) => {
    setMachines((prevMachines) =>
      prevMachines.map((machine) =>
        machine.name === machineName ? { ...machine, status: newStatus } : machine
      )
    );
  };

  return (
    <div>
      <h1>Manufacturing Dashboard</h1>
      {machines.map((machine) => (
        <Machine
          key={machine.name}
          name={machine.name}
          status={machine.status}
          onStatusChange={handleStatusChange}
        />
      ))}
    </div>
  );
};

export default ManufacturingDashboard;
