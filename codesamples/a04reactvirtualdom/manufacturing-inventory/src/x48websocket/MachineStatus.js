// src/MachineStatus.js
import React, { useEffect, useState } from 'react';

const MachineStatus = () => {
  const [status, setStatus] = useState('');

  useEffect(() => {
    const ws = new WebSocket('ws://127.0.0.1:8000/ws/machine-status');

    ws.onmessage = (event) => {
      setStatus(event.data);
    };

    // Clean up on component unmount
    return () => {
      ws.close();
    };
  }, []);

  return (
    <div>
      <h1>Machine Status</h1>
      <p>{status}</p>
    </div>
  );
};

export default MachineStatus;
