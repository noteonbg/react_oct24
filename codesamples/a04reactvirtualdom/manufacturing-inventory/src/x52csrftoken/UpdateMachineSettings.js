// src/UpdateMachineSettings.js
import React from 'react';
import axios from 'axios';

const UpdateMachineSettings = ({ csrfToken }) => {
    const updateMachineSettings = async () => {
        try {
            
            console.log("token generated is",csrfToken);
            axios.defaults.headers.post['X-CSRF-Token'] = csrfToken;

            const response = await axios.post('http://localhost:8000/api/update-machine', 
                { setting: 'new-value' } 
                
            );
            console.log(response.data);
        } catch (error) {
            console.error('Error updating machine settings:', error);
        }
    };

    return (
        <div>
            <h1>Manufacturing Machine Control</h1>
            <button onClick={updateMachineSettings}>Update Machine Settings</button>
        </div>
    );
};

export default UpdateMachineSettings;
