import './App.css';
import React from 'react';
import { Component } from 'react';
import { Counter } from './components/Counter';
class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <Counter step={20} />
      </>
    );
  }
}

export default App;

//props step
