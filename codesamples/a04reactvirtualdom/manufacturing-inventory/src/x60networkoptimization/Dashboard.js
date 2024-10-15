import React, { useEffect, useState } from 'react';
import { fetchMachines } from './machineApi';
import MachineList from './MachineList';

const Dashboard = () => {
  const [machines, setMachines] = useState([]);
  const [filter, setFilter] = useState('');
  const [debouncedFilter, setDebouncedFilter] = useState(filter);
  
  // Debounce effect or Throttling
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedFilter(filter);
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [filter]);

  // Fetch machines data
  useEffect(() => {
    const getMachines = async () => {
      const data = await fetchMachines();
      setMachines(data);
    };

    getMachines();
  }, []);

  // Filter machines based on debounced input
  const filteredMachines = machines.filter(machine =>
    machine.name.toLowerCase().includes(debouncedFilter.toLowerCase())
  );

  return (
    <div>
      <header>
        <h1>Manufacturing Dashboard</h1>
        <input
          type="text"
          placeholder="Search Machines"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </header>
      <MachineList machines={filteredMachines} />
    </div>
  );
};

export default Dashboard;
