import React from 'react';

const withLogging = (WrappedComponent) => {
  return (props) => {
    console.log('Rendering props:', props);
    return <WrappedComponent {...props} />;
  };
};

export default withLogging;
