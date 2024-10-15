// src/App.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function SecurityHeader() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/data');
                console.log(response);
                setData(response.data.message);
            } catch (error) {
                console.error('Error fetching data:', error);
                setError('Failed to fetch data');
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Manufacturing App</h1>
            {error ? <p>{error}</p> : data ? <p>{data}</p> : <p>Loading...</p>}
        </div>
    );
}

export default SecurityHeader;
