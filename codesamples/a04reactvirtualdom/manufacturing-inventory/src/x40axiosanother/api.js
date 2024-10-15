// src/api.js
import axios from 'axios';

const API_URL = 'http://localhost:3000/products';

// Get all products
export const getProducts = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

// Create a new product
export const createProduct = async (product) => {
    const response = await axios.post(API_URL, product);
    return response.data;
};

// Update an existing product
export const updateProduct = async (id, product) => {
    const response = await axios.put(`${API_URL}/${id}`, product);
    return response.data;
};

// Delete a product
export const deleteProduct = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
};
