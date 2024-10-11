// src/components/ReadNumberViaQuery.js
import React from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';

const ReadNumberViaQuery = ({ onLogout,username }) => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const number = queryParams.get('number');
  const navigate = useNavigate();

  const handleLogout = () => {
        navigate('/'); // Redirect to home or login page
  };

  return (
    <div>
      <h1>Read Number via Query</h1>
      <h2>Welcome, {username}!</h2>
      {number ? (
        <h2>The passed number is: {number}</h2>
      ) : (
        <h2>No number was passed.</h2>
      )}
      {/* Link to go back to PostLogin */}
      <Link to="/post-login">
        <button>Back to Post Login</button>
      </Link>
      {/* Logout button */}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default ReadNumberViaQuery;
