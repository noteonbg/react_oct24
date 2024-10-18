// src/MachineSettings.js
import React, { useEffect, useState } from 'react';

const MachineSettings = () => {
    const [setting, setSetting] = useState('');

    // Load setting from localStorage when the component mounts
    useEffect(() => {
        const savedSetting = localStorage.getItem('machineSetting');
        if (savedSetting) {
            setSetting(savedSetting);
        }
    }, []);

    // Handle change in input
    const handleChange = (e) => {
        setSetting(e.target.value);
    };

    // Save the setting to localStorage
    const handleSave = () => {
        localStorage.setItem('machineSetting', setting);
        alert('Setting saved!');
    };

    return (
        <div>
            <h1>Machine Settings</h1>
            <input
                type="text"
                value={setting}
                onChange={handleChange}
                placeholder="Enter machine setting"
            />
            <button onClick={handleSave}>Save Setting</button>
        </div>
    );
};

export default MachineSettings;
