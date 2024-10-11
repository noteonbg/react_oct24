
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './DashBoard';
import MachineDetails from './MachineDetails';
import NotFound from './NotFound';

const RoutingMain = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" component={Dashboard} >hi</Route>
        <Route path="/machine/:id" component={MachineDetails} />
        <Route component={NotFound} />
      </Routes>
    </Router>
  );
};

export default RoutingMain;
