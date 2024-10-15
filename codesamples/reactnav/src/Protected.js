import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Protected = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get
                ('http://127.0.0.1:8000/protected/',
                     { withCredentials: true });
                setData(response.data);
            } catch (err) {
                setError(err.response?.data?.message || 'Error fetching protected data');
            }
        };

        fetchData();
    }, []);

    if (error) return <div>{error}</div>;
    if (!data) return <div>Loading...</div>;

    return <div>{JSON.stringify(data)}</div>;
};

export default Protected;
