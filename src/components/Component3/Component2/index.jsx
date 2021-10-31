// counter with base level

import React, { Component } from 'react';
import styles from '../TotalComponents.module.scss';

function Component2(props) {
  const { level, step, setLevel } = props;
  const inc = () => {
    setLevel(level+step);
  };
  const dec = () => {
    setLevel(level-step);
  };  
 return (
      <div className={styles.styleForComponent2}>
        <p>Component1</p>
        <p>{level}</p>
        <button onClick={inc}> + </button>
        <button onClick={dec}> - </button>
      </div>
    );
}

export default Component2;
