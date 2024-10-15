// src/api.js
// src/api.js
import axios from 'axios';

const API_URL = 'http://localhost:3000/products'; // Replace with your API endpoint

export const fetchProducts = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        if (error.response) {
            // The request was made, but the server responded with a status code
            throw { status: error.response.status, message: error.message };
        } else {
            // The request was made but no response was received
            throw { status: null, message: 'Network error. Please try again later.' };
        }
    }
};

