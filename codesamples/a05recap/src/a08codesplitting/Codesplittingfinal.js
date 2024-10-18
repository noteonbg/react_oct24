// src/App.js
import React, { Suspense, lazy } from 'react';

// Lazy load the components
const InventoryList = lazy(() => import('./InventoryList'));
const InventoryDetails = lazy(() => import('./InventoryDetails'));

function CodeSplitting() {
  return (
    <div>
      <h1>Manufacturing Inventory Management</h1>
      <Suspense fallback={<div>Loading components...</div>}>
        <InventoryList />
        <InventoryDetails />
      </Suspense>
    </div>
  );
}

export default CodeSplitting;
