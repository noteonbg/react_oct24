// src/App.js
import React from 'react';
import MachineCard from './MachineCard';
import machines from './machines';
import './App.css';


//Sass (Syntactically Awesome Style Sheets) usage remember
//it is a css preprocessor

function Usescss() {
  return (
    <div>
      <h1>Manufacturing Machine Overview</h1>
      <div className="machine-list">
        {machines.map(machine => (
          <MachineCard key={machine.id} machine={machine} />
        ))}
      </div>
    </div>
  );
}

export default Usescss;
