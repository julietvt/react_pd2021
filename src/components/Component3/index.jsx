// родитель 


import React, { Component } from 'react';
import Component1 from './Component1';
import Component2 from './Component2';
import styles from './TotalComponents.module.scss';

export default class Component3 extends Component {
  constructor(props){
      super(props);
      this.state = { level: 0};
  }
  setLevel = (newLevel) => {
      this.setState({level: newLevel});
  }
  handleLevel = ({target: {value}}) => {
      this.setState({level: value});
  }
  handleSubmit = e => {
      e.preventDefault();
  }
  render() {
    const {level} = this.state;
    return (
      <div className={styles.styleForComponent3}>
          <form>
            <p>Component3</p>
            <input type="text" name="level" value={level} onChange={this.handleLevel}></input>
            <button type="submit">Send</button>
          </form>
          <Component1 level={level}/>
          <Component2 level={level} step={5} setLevel={this.setLevel}/>
      </div>
    );
  }
}
