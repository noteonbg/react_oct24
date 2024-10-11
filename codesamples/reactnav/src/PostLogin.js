// src/components/PostLogin.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PostLogin = ({ onLogout }) => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);

  const handleAdd = () => {
    const sum = parseFloat(num1) + parseFloat(num2);
    setResult(sum);
  };

  return (
    <div>
      <h1>Add Two Numbers</h1>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="Number 1"
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Number 2"
      />
      <button onClick={handleAdd}>Add</button>
      {result !== null && <h2>Result: {result}</h2>}
      <button onClick={onLogout}>Logout</button>


      <Link to="/read-number" state={{ number: result }}>
        <button disabled={result === null}>Go to Read Number</button>
      </Link>


      <Link to={`/read-number-via-query?number=${result}`}>
        <button disabled={result === null}>Go to Read Number via Query</button>
      </Link>
    </div>
  );
};

export default PostLogin;
