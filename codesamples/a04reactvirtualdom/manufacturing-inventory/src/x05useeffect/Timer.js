import React, { Component } from 'react';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0,
    };
  }

  // Called right after the component is added to the DOM
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({ seconds: prevState.seconds + 1 }));
    }, 1000);
  }

  // Called before the component is removed from the DOM
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  // Called when the component receives new props
  componentDidUpdate(prevProps, prevState) {
    if (prevState.seconds !== this.state.seconds) {
      console.log(`Timer updated: ${this.state.seconds} seconds`);
    }
  }

  render() {
    return (
      <div>
        <h1>Timer: {this.state.seconds} seconds</h1>
      </div>
    );
  }
}

export default Timer;
