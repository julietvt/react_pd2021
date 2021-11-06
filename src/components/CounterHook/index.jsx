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
function CounterHook() {
    const [value, setValue] = useState(0);
    return (
        <div>
            <p>{value}</p>
            <button onClick={()=>setValue(value+1)}> + </button>            
        </div>
    );
}

export default CounterHook;
