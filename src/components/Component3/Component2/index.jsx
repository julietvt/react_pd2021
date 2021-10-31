// counter with base level

import React, { Component } from 'react';

function Component2(props) {
  const { level, step, setLevel } = props;
  const inc = () => {
    setLevel(level+step);
  };
  const dec = () => {
    setLevel(level-step);
  };  
 return (
      <div>
        <p>Component1</p>
        <p>{level}</p>
        <button onClick={inc}> + </button>
        <button onClick={dec}> - </button>
      </div>
    );
}

export default Counter;
