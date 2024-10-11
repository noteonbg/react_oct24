import React from 'react';

const Machine = ({ name, type, status }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>Type: {type}</p>
      <p>Status: {status}</p>
    </div>
  );
};

export default Machine;
