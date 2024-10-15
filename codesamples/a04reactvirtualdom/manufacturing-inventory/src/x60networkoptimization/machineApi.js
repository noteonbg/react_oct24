const machinesData = [
    { id: 1, name: 'Machine A', status: 'Running', production: 1500 },
    { id: 2, name: 'Machine B', status: 'Stopped', production: 0 },
    { id: 3, name: 'Machine C', status: 'Running', production: 1200 },
    { id: 4, name: 'Machine D', status: 'Maintenance', production: 800 },
    // Add more machines as needed
  ];
  
  // Simulate a network request with a delay
  const fetchMachines = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(machinesData);
      }, 500);
    });
  };
  
  export { fetchMachines };
  