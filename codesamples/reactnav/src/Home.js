// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return <div>
      <h1>Welcome to the App!</h1>
      <p>Please log in to continue.</p>
      <Link to="/login"> Login </Link>
     <br/> <Link to="/Other"> Other Login </Link>
      
    </div>
};

export default Home;
