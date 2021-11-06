/*
export class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }
  inc = () => {
    const { value } = this.state;
    this.setState({ value: value + 1 });
  };
  dec = () => {
    const { value } = this.state;
    this.setState({ value: value - 1 });
  };
  render() {
    const { value } = this.state;
    return (
      <div className={styles.wrapper}>
        <p>{value}</p>
        <button onClick={this.inc}> + </button>
        <button onClick={this.dec}> - </button>
      </div>
    );
  }
}
export default Counter;
*/

import React, {useState} from 'react';
function CounterHoo(props) {
    // value - состояние , setValue - колбэк функции которое ставит состояние
    // useState - сам крючек а 0 - начальное состояние value
    const [value, setValue] = useState(0);
    const {step} = props;
    const inc = () => {
       setValue(value+step);
    };
    const dec = () => { 
        setValue(value-step);
    };
    return (
        <div>
            <p>{value}</p>
            <button onClick={inc}> + </button> 
            <button onClick={dec}> - </button>           
        </div>
    );
}

export default CounterHook;
