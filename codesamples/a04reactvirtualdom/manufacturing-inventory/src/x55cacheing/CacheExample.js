// src/App.js
import React, { useEffect, useState } from 'react';

function CacheExample() {
    const [machineData, setMachineData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchMachineData = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8000/api/machine-data', {
                method: 'GET',
                cache: 'force-cache', // Use cached response if available
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setMachineData(data);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchMachineData();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h1>Machine Dashboard</h1>
            <h2>Machine ID: {machineData.machine_id}</h2>
            <p>Status: {machineData.status}</p>
            <p>Temperature: {machineData.temperature} °C</p>
            <p>Production Rate: {machineData.production_rate} units/hour</p>
        </div>
    );
}

export default CacheExample;
