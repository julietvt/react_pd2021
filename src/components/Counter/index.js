// поставить состояние this.setState({x: 10})

import React, { Component } from 'react';

export class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }
  inc = () => {
    const { value } = this.state;
    const { step } = this.props;
    this.setState({ value: value + step });
  };
  dec = () => {
    const { value } = this.state;
    const { step } = this.props;
    this.setState({ value: value - step });
  };
  myFun = () => {
    alert('Hello, my Friend!');
  };
  render() {
    const { value } = this.state;
    return (
      <>
        <p>{value}</p>
        <button onClick={this.inc}> + </button>
        <button onClick={this.dec}> - </button>
        <button onClick={this.myFun}>say hello</button>
      </>
    );
  }
}

export default Counter;
