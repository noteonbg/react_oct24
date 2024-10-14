// src/api.js
import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000'; // FastAPI server URL

// Function to log in and get a token
export const login = async (username, password) => {
    const response = await axios.post(`${API_URL}/token`, new URLSearchParams({ username, password }), {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    });
    return response.data.access_token;
};

// Function to add two numbers
export const addNumbers = async (token, a, b) => {
    const response = await axios.post(
        `${API_URL}/add?a=${a}&b=${b}`,
        {},
        {
            headers: { Authorization: `Bearer ${token}` }
        }
    );
    return response.data.result;
};
