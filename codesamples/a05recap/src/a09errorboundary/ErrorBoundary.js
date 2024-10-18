// src/ErrorBoundary.js
import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Error logged:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong while fetching machine status.</h1>;
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;
