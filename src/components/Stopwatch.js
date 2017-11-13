import React, { Component, PropTypes } from 'react';

export default class Stopwatch extends Component {
  state = {
    running: false,
    previouseTime: 0,
    elapsedTime: 0,
  };

  componentDidMount() {
    this.interval = setInterval(this.onTick);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  onStart: function () {
    this.setState({
      running: true,
      previousTime: Date.now(),
    });
  },

  onStop: function () {
    this.setState({
      running: false,
    });
  },

  onReset: function () {
    this.setState({
      elapsedTime: 0,
      previousTime: Date.now(),
    });
  },

  onTick: function () {
    if (this.state.running) {
      var now = Date.now();
      this.setState({
        elapsedTime: this.state.elapsedTime + (now - this.state.previousTime),
        previousTime: Date.now(),
      });
    }
  },
}
