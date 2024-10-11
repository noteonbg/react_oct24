// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from  "react-router-dom"
import Login from './Login';
import Home from './Home';
import PostLogin from './PostLogin';
import ReadNumber from './ReadNumber';
import ReadNumberViaQuery from './ReadNumberViaQuery';

//npm install react-router-dom@latest

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogin = (name) => {
    setIsLoggedIn(true);
    setUsername(name);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={<Login onLogin={handleLogin} />}
          />
          <Route
            path="/post-login"
            element={
              isLoggedIn ? (
                <PostLogin onLogout={handleLogout} />
              ) : (
                <Home />
              )
            }
          />

    <Route path="/read-number" element={<ReadNumber />} />
    <Route path="/read-number-via-query" element={<ReadNumberViaQuery />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
