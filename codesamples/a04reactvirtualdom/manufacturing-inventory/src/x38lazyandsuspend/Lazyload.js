// src/App.js
import React, { Suspense, lazy } from 'react';


// Lazy load the components
const ProductList = lazy(() => import('./ProductList'));
const ProductDetails = lazy(() => import('./ProductDetails'));

function LazyLoad() {
  return (
    <div>
      <h1>Manufacturing Product Management</h1>
      <Suspense fallback={<div>Loading components...</div>}>
        <ProductList/>
        <ProductDetails/>
      </Suspense>
    </div>
  );
}

export default LazyLoad;
