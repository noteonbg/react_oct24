import React, { Component } from 'react';

class ClassManufacturingLine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      producedWidgets: 0,
      isRunning: false,
    };
  }

  componentDidMount() {
    // Start production when the component mounts
    this.startProduction();
  }

  componentDidUpdate(prevProps, prevState) {
    // Log when production updates
    if (prevState.producedWidgets !== this.state.producedWidgets) {
      console.log(`Produced widgets: ${this.state.producedWidgets}`);
    }
  }

  componentWillUnmount() {
    // Stop production when the component unmounts
    this.stopProduction();
  }

  startProduction = () => {
    this.setState({ isRunning: true });
    this.interval = setInterval(this.produceWidget, 1000);
  };

  stopProduction = () => {
    this.setState({ isRunning: false });
    clearInterval(this.interval);
  };

  produceWidget = () => {
    this.setState((prevState) => ({
      producedWidgets: prevState.producedWidgets + 1,
    }));
  };

  render() {
    return (
      <div>
        <h2>Class Manufacturing Line</h2>
        <p>Produced Widgets: {this.state.producedWidgets}</p>
        <p>Status: {this.state.isRunning ? 'Running' : 'Stopped'}</p>
      </div>
    );
  }
}

export default ClassManufacturingLine;
