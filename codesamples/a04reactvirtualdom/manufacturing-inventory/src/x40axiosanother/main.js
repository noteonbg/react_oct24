// src/App.js
import React, { useState, useEffect } from 'react';
import { getProducts, createProduct, updateProduct, deleteProduct } from './api';

function DbhApp() {
    const [products, setProducts] = useState([]);
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [editingId, setEditingId] = useState(null);

    // Fetch products when the component mounts
    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        const data = await getProducts();
        setProducts(data);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (editingId) {
            await updateProduct(editingId, { name, quantity: Number(quantity) });
        } else {
            await createProduct({ name, quantity: Number(quantity) });
        }
        setName('');
        setQuantity('');
        setEditingId(null);
        fetchProducts();
    };

    const handleEdit = (product) => {
        setName(product.name);
        setQuantity(product.quantity);
        setEditingId(product.id);
    };

    const handleDelete = async (id) => {
        await deleteProduct(id);
        fetchProducts();
    };

    return (
        <div className="App">
            <h1>Manufacturing Products</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Product Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="number"
                    placeholder="Quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    required
                />
                <button type="submit">{editingId ? 'Update' : 'Add'} Product</button>
            </form>

            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        {product.name} - Quantity: {product.quantity}
                        <button onClick={() => handleEdit(product)}>Edit</button>
                        <button onClick={() => handleDelete(product.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default DbhApp;
