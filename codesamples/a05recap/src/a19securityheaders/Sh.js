// App.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

//looka httpheaders.py...for response headers
//

function App() {
    const [responseMessage, setResponseMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const fetchMessage = async () => {
        try {
            const response = await axios.get('http://localhost:8000/', {
                headers: {
                    'custom-header': 'MyCustomValue', // Custom header
                    'Authorization': 'Bearer YOUR_ACCESS_TOKEN', // Example authorization header
                    'Content-Type': 'application/json', // Content type
                    'Accept': 'application/json', // Expected response type
                    'User-Agent': 'MyReactApp/1.0' // Custom user agent
                }
            });
            setResponseMessage(response.data.message);
        } catch (error) {
            setErrorMessage('Error fetching message. Check the console.');
            console.error('Error:', error);
        }
    };

    useEffect(() => {
        fetchMessage();
    }, []);

    return (
        <div style={{ textAlign: 'center', padding: '50px' }}>
            <h1>HTTP Header Example</h1>
            {errorMessage ? (
                <p style={{ color: 'red' }}>{errorMessage}</p>
            ) : (
                <h2>{responseMessage}</h2>
            )}
        </div>
    );
}

export default App;


/*






*/