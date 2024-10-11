import React, { useState, useCallback } from 'react';

const machinesData = [
  { id: 1, name: 'Machine A', type: 'CNC', status: 'Active' },
  { id: 2, name: 'Machine B', type: 'Laser', status: 'Inactive' },
  { id: 3, name: 'Machine C', type: 'CNC', status: 'Active' },
  { id: 4, name: 'Machine D', type: '3D Printer', status: 'Active' },
];

const MachineList = () => {
  const [filterType, setFilterType] = useState('All');

  const handleFilterChange = (event) => {
    setFilterType(event.target.value);
  };

  const filterMachines = useCallback(() => {
    if (filterType === 'All') {
      return machinesData;
    }
    return machinesData.filter(machine => machine.type === filterType);
  }, [filterType]); // Dependency array to re-create the function only when filterType changes

  const filteredMachines = filterMachines();

  return (
    <div>
      <h1>Machine List</h1>
      <label htmlFor="filter">Filter by Type: </label>
      <select id="filter" value={filterType} onChange={handleFilterChange}>
        <option value="All">All</option>
        <option value="CNC">CNC</option>
        <option value="Laser">Laser</option>
        <option value="3D Printer">3D Printer</option>
      </select>
      
      <ul>
        {filteredMachines.map(machine => (
          <li key={machine.id}>
            {machine.name} - {machine.type} - Status: {machine.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MachineList;
