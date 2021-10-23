// поставить состояние this.setState({x: 10})

import React, { Component } from 'react';
import styles from './Counter.module.scss';

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
    // получение состояний
    const { value } = this.state;
    //получение пропсов
    const { step } = this.props;
    // установка состояния через setState()
    this.setState({ value: value - step });
  };
  myFun = () => {
    alert('Hello, my Friend!');
  };
  render() {
    const { value } = this.state;
    return (
      // можем вернуть только 1 элемент! поэтому через фрагмент <> </>
      <div className={styles.wrapper}>
        <p>{value}</p>
        <button onClick={this.inc}> + </button>
        <button onClick={this.dec}> - </button>
        <button onClick={this.myFun}>say hello</button>
      </div>
    );
  }
}

export default Counter;
