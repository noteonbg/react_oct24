// src/MachineSettings.js
import React, { useEffect, useState } from 'react';

const MachineSettings = () => {
    const [machineData, setMachineData] = useState({
        machineName: '',
        operatingMode: 'Automatic',
        targetTemperature: '',
        productionSpeed: '',
    });

    // Load settings from sessionStorage when the component mounts
    useEffect(() => {
        const savedMachineData = sessionStorage.getItem('machineData');
        if (savedMachineData) {
            setMachineData(JSON.parse(savedMachineData));
        }
    }, []);

    // Handle changes in inputs
    const handleChange = (e) => {
        const { name, value } = e.target;
        setMachineData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Save settings to sessionStorage
    const handleSave = () => {
        sessionStorage.setItem('machineData', JSON.stringify(machineData));
        alert('Settings saved!');
    };

    return (
        <div>
            <h1>Machine Settings</h1>
            <input
                type="text"
                name="machineName"
                value={machineData.machineName}
                onChange={handleChange}
                placeholder="Machine Name"
            />
            <select
                name="operatingMode"
                value={machineData.operatingMode}
                onChange={handleChange}
            >
                <option value="Automatic">Automatic</option>
                <option value="Manual">Manual</option>
            </select>
            <input
                type="number"
                name="targetTemperature"
                value={machineData.targetTemperature}
                onChange={handleChange}
                placeholder="Target Temperature (°C)"
            />
            <input
                type="number"
                name="productionSpeed"
                value={machineData.productionSpeed}
                onChange={handleChange}
                placeholder="Production Speed (units/hour)"
            />
            <button onClick={handleSave}>Save Settings</button>
        </div>
    );
};

export default MachineSettings;
