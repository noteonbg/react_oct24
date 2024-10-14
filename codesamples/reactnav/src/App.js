// src/App.js
import React, { useState,Suspense,lazy } from 'react';

import { BrowserRouter as Router, Routes, Route,Navigate } from  "react-router-dom"
import Login from './Login';
import Home from './Home';
import PostLogin from './PostLogin';
import ReadNumber from './ReadNumber';
import ReadNumberViaQuery from './ReadNumberViaQuery';
import NotFound from './NotFound';
import About from './About';



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


  function Loading() {
    return <h2>🌀 Loading...</h2>;
  }

  /*
const ReadNumberL = lazy(() => import('./ReadNumber'));
const ReadNumberQL = lazy(() => import('./ReadNumberViaQuery'));
*/


  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={<Login onLogin={handleLogin} username={username} />}
          />
          <Route
            path="/post-login"
            element={
              isLoggedIn ? (
                <PostLogin onLogout={handleLogout} username={username}/>
              ) : (
                <Home />
              )
            }
          />

       
    <Route path="/read-number" element={<ReadNumberL username={username}/>} />
    <Route path="/read-number-via-query" element={<ReadNumberQL  username={username}/>} />
    <Route path="/About" element={<About/>} />
    <Route path="*"  element={<Navigate to="/"/>} />
          
          
        
     
     
        </Routes>

      </div>
    </Router>
  );
};

export default App;
