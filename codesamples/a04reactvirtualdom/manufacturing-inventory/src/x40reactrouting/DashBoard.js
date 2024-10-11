//npm install react-router-dom

// src/Dashboard.js
import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <h1>Manufacturing Dashboard</h1>
      <ul>
        <li>
          <Link to="/machine/1">Machine A</Link>
        </li>
        <li>
          <Link to="/machine/2">Machine B</Link>
        </li>
        <li>
          <Link to="/machine/3">Machine C</Link>
        </li>
      </ul>
    </div>
  );
};

export default Dashboard;
