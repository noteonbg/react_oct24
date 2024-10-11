import React, { useState } from 'react';
import Machine from './Machine';

const MachineList = () => {
  const [machines, setMachines] = useState([
    { id: 1, name: 'Machine A', type: 'CNC', status: 'Active' },
    { id: 2, name: 'Machine B', type: 'Laser', status: 'Inactive' },
    { id: 3, name: 'Machine C', type: 'CNC', status: 'Active' },
  ]);

  const [filterType, setFilterType] = useState('All');

  const filteredMachines = machines.filter(machine => {
    return filterType === 'All' || machine.type === filterType;
  });

  const toggleMachineStatus = (id) => {
    setMachines((prevMachines) =>
      prevMachines.map((machine) =>
        machine.id === id ? { ...machine, status: machine.status === 'Active' ? 'Inactive' : 'Active' } : machine
      )
    );
  };

  return (
    <div>
      <h1>Machine List</h1>
      <label htmlFor="filter">Filter by Type: </label>
      <select id="filter" value={filterType} onChange={(e) => setFilterType(e.target.value)}>
        <option value="All">All</option>
        <option value="CNC">CNC</option>
        <option value="Laser">Laser</option>
      </select>

      <ul>
        {filteredMachines.map(machine => (
          <li key={machine.id}>
            <Machine {...machine} />
            <button onClick={() => toggleMachineStatus(machine.id)}>Toggle Status</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MachineList;
