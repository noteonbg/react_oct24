import React from 'react';
import Header from './Header';
import MachineStatus from './MachineStatus';
import ProductionStats from './ProductionStats';
import Inventory from './Inventory';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Header />
      <div className="content">
        <MachineStatus />
        <ProductionStats />
        <Inventory />
      </div>
    </div>
  );
};

export default Dashboard;
