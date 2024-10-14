// src/MachineStatus.js
import React, { useEffect, useState } from 'react';

const MachineStatus = () => {
  const [status, setStatus] = useState({});

  const fetchStatus = async () => {
    const response = await fetch('http://localhost:8000/machine-status/?machine_id=1');
    const data = await response.json();
    setStatus(data);
  };

  useEffect(() => {
    fetchStatus();
  }, []);

  const handleWebhook = async () => {
    const payload = {
      machine_id: 1,
      status: "Operational", // This would typically come from a real event
    };

    await fetch('http://localhost:8000/webhook/machine-status/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    fetchStatus(); // Fetch updated status
  };

  return (
    <div>
      <h1>Machine Status</h1>
      <p>Machine ID: {status.machine_id}</p>
      <p>Status: {status.status}</p>
      <button onClick={handleWebhook}>Update Machine Status</button>
    </div>
  );
};

export default MachineStatus;
