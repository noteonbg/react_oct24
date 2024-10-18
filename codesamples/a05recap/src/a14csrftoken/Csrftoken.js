
import React, { useEffect, useState } from 'react';
import UpdateMachineSettings from './UpdateMachineSettings';
import axios from 'axios';

function CsrfToken() {
    const [csrfToken, setCsrfToken] = useState('');

    useEffect(() => {
        // Fetch CSRF token from the server
        const fetchCsrfToken = async () => {
            try {
                const response = await axios.get('http://localhost:8000/csrf-token');
                const token = response.data.csrfToken; // Assume the CSRF token is sent in the response
                console.log(response.data);
                setCsrfToken(token);
            } catch (error) {
                console.error('Error fetching CSRF token:', error);
            }
        };

        fetchCsrfToken();
    }, []);

    return (
        <div className="App">
            {csrfToken ? (
                <UpdateMachineSettings csrfToken={csrfToken} />
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default CsrfToken;
