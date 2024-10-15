import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Protected from './Protected';
import Login1 from './Login1';

const App = () => {
    return (
        <Router>
            <Routes>
            
                <Route path="/"  element={<Login1/>} />
                <Route path="/protected" element={<Protected/>} />
            </Routes>
        </Router>
    );
};

export default App;
