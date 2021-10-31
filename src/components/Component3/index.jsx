// родитель 


import React, { Component } from 'react';
import Component1 from './Component1';
import Component2 from './Component2';
import styles from './TotalComponents.module.scss';

export default class Component3 extends Component {
  constructor(props){
      super(props);
      this.state = { level: 100};
  }
  setLevel = (newLevel) => {
      this.setState({level: newLevel});
  }
  render() {
    const {level} = this.state;
    return (
      <div className={styles.styleForComponent3}>
          <p>Component3</p>
          <Component1 level={level}/>
          <Component2 level={level} step={step} setLevel={this.setLevel}/>
      </div>
    );
  }
}
