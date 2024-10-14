// src/jwtaccess.js
import React, { useState } from 'react';
import { login, addNumbers } from './api';

function JwtAccess() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState('');
    const [numA, setNumA] = useState('');
    const [numB, setNumB] = useState('');
    const [result, setResult] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const token = await login(username, password);
            setToken(token);
            setError('');
        } catch (err) {
            setError('Login failed. Please check your credentials.');
            console.log(err);
        }
    };

    const handleAdd = async (e) => {
        e.preventDefault();
        try {
            const result = await addNumbers(token, numA, numB);
            setResult(result);
            setError('');
        } catch (err) {
            setError('Error adding numbers. Please check your input or token.');
        }
    };

    return (
        <div className="App">
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
            </form>

            {token && (
                <div>
                    <h1>Add Two Numbers</h1>
                    <form onSubmit={handleAdd}>
                        <input
                            type="number"
                            placeholder="Number A"
                            value={numA}
                            onChange={(e) => setNumA(e.target.value)}
                        />
                        <input
                            type="number"
                            placeholder="Number B"
                            value={numB}
                            onChange={(e) => setNumB(e.target.value)}
                        />
                        <button type="submit">Add</button>
                    </form>
                    {result && <p>Result: {result}</p>}
                </div>
            )}

            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
}

export default JwtAccess;
