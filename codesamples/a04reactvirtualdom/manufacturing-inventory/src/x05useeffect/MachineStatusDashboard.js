import React, { useState, useEffect } from 'react';

const MachineStatusDashboard = () => {
  const [machines, setMachines] = useState([]);
  const [loading, setLoading] = useState(true);
  const refreshInterval = 5000; // 5 seconds

  const fetchMachineStatuses = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/machines/status');
      const data = await response.json();
      setMachines(data);
    } catch (error) {
      console.error('Error fetching machine statuses:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Fetch data when the component mounts
    fetchMachineStatuses();

    // Set up interval to refresh machine statuses
    const intervalId = setInterval(fetchMachineStatuses, refreshInterval);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array means this runs once on mount

  if (loading) {
    return <div>Loading machine statuses...</div>;
  }

  return (
    <div>
      <h1>Machine Status Dashboard</h1>
      <ul>
        {machines.map(machine => (
          <li key={machine.id}>
            {machine.name}: {machine.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MachineStatusDashboard;
