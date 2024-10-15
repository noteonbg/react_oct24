import React from 'react';
import Header from './Header';
import MachineList from './MachineList';
import ProductionStats from './ProductionStats';

const Dashboard = ({ machines }) => {
  const totalUnits = machines.reduce((sum, machine) => sum + machine.production, 0);

  return (
    <div className="dashboard">
      <Header />
      <ProductionStats totalUnits={totalUnits} />
      <MachineList machines={machines} />
    </div>
  );
};

export default Dashboard;
