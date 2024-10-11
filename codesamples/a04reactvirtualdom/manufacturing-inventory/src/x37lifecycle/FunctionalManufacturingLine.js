import React, { useState, useEffect } from 'react';

const FunctionalManufacturingLine = () => {
  const [producedWidgets, setProducedWidgets] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  let interval;

  useEffect(() => {
    // Start production when the component mounts
    startProduction();
    
    return () => {
      // Stop production when the component unmounts
      stopProduction();
    };
  }, []);

  useEffect(() => {
    // Log when production updates
    console.log(`Produced widgets: ${producedWidgets}`);
  }, [producedWidgets]);

  const startProduction = () => {
    setIsRunning(true);
    const interval = setInterval(() => {
      setProducedWidgets((prevCount) => prevCount + 1);
    }, 1000);
    return interval; // Return the interval ID for cleanup
  };

  const stopProduction = () => {
    setIsRunning(false);
    clearInterval(interval);
  };

  return (
    <div>
      <h2>Functional Manufacturing Line</h2>
      <p>Produced Widgets: {producedWidgets}</p>
      <p>Status: {isRunning ? 'Running' : 'Stopped'}</p>
    </div>
  );
};

export default FunctionalManufacturingLine;
