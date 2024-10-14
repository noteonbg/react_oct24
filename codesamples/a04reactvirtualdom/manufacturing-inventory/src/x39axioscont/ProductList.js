// src/components/ProductList.js
import React, { useEffect, useState } from 'react';
import { fetchProducts } from './api';

const SProductList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const data = await fetchProducts();
                setProducts(data);
            } catch (err) {
                let errorMessage;
                switch (err.status) {
                    case 400:
                        errorMessage = 'Bad Request. Please check your input.';
                        break;
                    case 404:
                        errorMessage = 'Products not found. Please try again later.';
                        break;
                    case 500:
                        errorMessage = 'Server error. Please try again later.';
                        break;
                    default:
                        errorMessage = err.message || 'An unexpected error occurred.';
                }
                setError(errorMessage);
            } finally {
                setLoading(false);
            }
        };

        getProducts();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div>
            <h1>Product List</h1>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        {product.name} - ${product.price}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SProductList;
