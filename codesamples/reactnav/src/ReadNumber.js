// src/components/ReadNumber.js
import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const ReadNumber = () => {
  const location = useLocation();
  const { number } = location.state || { number: null };

  return (
    <div>
      <h1>Read Number</h1>
      {number !== null ? (
        <h2>The passed number is: {number}</h2>
      ) : (
        <h2>No number was passed.</h2>
      )}
      {/* Link to go back to PostLogin */}
      <Link to="/post-login">
        <button>Back to Post Login</button>
      </Link>
    </div>
  );
};

export default ReadNumber;
