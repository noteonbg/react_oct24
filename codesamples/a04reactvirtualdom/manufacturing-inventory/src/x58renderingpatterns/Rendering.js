import React from 'react';
import Dashboard from './Dashboard';
import './RenderingApp.css';

const machines = [
  { id: 1, name: 'Machine A', status: 'Running', production: 1500 },
  { id: 2, name: 'Machine B', status: 'Stopped', production: 0 },
  { id: 3, name: 'Machine C', status: 'Running', production: 1200 },
];

const RenderingStyle = () => {
  return (
    <div className="app">
      <Dashboard machines={machines} />
    </div>
  );
};

export default RenderingStyle;

/*
Conditional Rendering: Rendering different components based on certain conditions.
List Rendering: Rendering lists of data efficiently.
Lazy Loading: Loading components only when needed to improve performance.
Memoization: Preventing unnecessary re-renders of components.
Portal: Rendering components outside the normal DOM hierarchy.


*/
