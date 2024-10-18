// App.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function CSRF() {
    const [csrfToken, setCsrfToken] = useState('');
    const [formData, setFormData] = useState({ name: '' });

    useEffect(() => {
        // Fetch the CSRF token when the component mounts
        const fetchCsrfToken = async () => {
            const response = await axios.get('http://localhost:8000/csrf-token', {
                withCredentials: true
            });
            setCsrfToken(response.data.csrf_token);
        };

        fetchCsrfToken();
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/submit', formData, {
                headers: {
                    'X-CSRF-Token': csrfToken // Include the CSRF token in the headers
                },
                withCredentials: true
            });
            console.log(response.data);
        } catch (error) {
            console.error('Error submitting data:', error.response.data);
        }
    };

    return (
        <div>
            <h1>CSRF Protection Example</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default CSRF;
