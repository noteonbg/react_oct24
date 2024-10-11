import React, { useState, useEffect, useMemo } from 'react';

const mockProductionData = [
  { id: 1, name: 'Machine A', output: 150, efficiency: 85 },
  { id: 2, name: 'Machine B', output: 200, efficiency: 90 },
  { id: 3, name: 'Machine C', output: 120, efficiency: 75 },
  { id: 4, name: 'Machine D', output: 180, efficiency: 88 },
];

const ProductionMetricsDashboard = () => {
  const [productionData, setProductionData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate a data fetch with a timeout
    const timer = setTimeout(() => {
      setProductionData(mockProductionData);
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer); // Cleanup timeout on unmount
  }, []); // Runs only once on mount

  // Calculate total output and average efficiency using useMemo
  const totalOutput = useMemo(() => {
    return productionData.reduce((total, item) => total + item.output, 0);
  }, [productionData]);

  const averageEfficiency = useMemo(() => {
    const totalEfficiency = productionData.reduce((total, item) => total + item.efficiency, 0);
    return productionData.length > 0 ? (totalEfficiency / productionData.length).toFixed(2) : 0;
  }, [productionData]);

  return (
    <div>
      <h1>Production Metrics Dashboard</h1>
      {loading && <p>Loading production data...</p>}
      {error && <p>Error fetching data: {error}</p>}
      {!loading && (
        <div>
          <h2>Total Output: {totalOutput} units</h2>
          <h2>Average Efficiency: {averageEfficiency}%</h2>
          <ul>
            {productionData.map(item => (
              <li key={item.id}>
                {item.name}: {item.output} units, {item.efficiency}%
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProductionMetricsDashboard;

/*
useMemo Hook:

Total Output: Computes the total output based on the productionData, only recalculating when the data changes.
Average Efficiency: Computes the average efficiency of the machines, again recalculating only when the data changes.


  /*

componentDidMount
useEffect(() => {
    // gets called once first time when component is loaded
},[])

componentDidUpdate
useEffect(() => {
    // gets  called every time when state or props change
})


componentDidUpdate
useEffect(() => {
    // gets  called name changes
}, [name])

Data Fetching

useEffect(() => {
  const fetchMachineData = async () => {
    const response = await fetch('/api/machines');
    const data = await response.json();
    setMachines(data);
  };

  fetchMachineData();
}, []);

Real-time Updates
useEffect(() => {
  const socket = new WebSocket('ws://localhost:4000');

  socket.onmessage = (event) => {
    const updatedData = JSON.parse(event.data);
    setMachines((prevMachines) => [...prevMachines, updatedData]);
  };

  return () => {
    socket.close();
  };
}, []);


Polling for Updates
useEffect(() => {
  const intervalId = setInterval(() => {
    fetchMachineData(); // Function to fetch data
  }, 5000); // Every 5 seconds

  return () => clearInterval(intervalId);
}, []);


Event Listeners
useEffect(() => {
  const handleResize = () => {
    setLayout(getLayout()); // Adjust layout based on window size
  };

  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
}, []);


Managing Component Lifecycle
useEffect(() => {
  const timeoutId = setTimeout(() => {
    alert('Timeout triggered!');
  }, 3000);

  return () => clearTimeout(timeoutId); // Cleanup on unmount
}, []);


Dependent Updates
useEffect(() => {
  if (selectedMachine) {
    fetchMachineDetails(selectedMachine.id); // Fetch details based on selected machine
  }
}, [selectedMachine]);


Form handling
Scenario: Validate input fields and show error messages based on user input in a form for maintenance scheduling.

javascript
useEffect(() => {
  if (taskName.length < 3) {
    setError('Task name must be at least 3 characters long.');
  } else {
    setError(null);
  }
}, [taskName]);

useEffect(() => {
  if (machineStatus === 'Offline') {
    // Trigger an animation or visual cue
    animateMachineOffline();
  }
}, [machineStatus]);




*/