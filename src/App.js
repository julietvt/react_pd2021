import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Component } from 'react';
import HelloFun from './components/HelloFun';
import HelloClass from './components/HelloClass';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: 'undefined user',
    };
  }
  render() {
    const { login } = this.state;
    return (
      <>
        <HelloFun name={login} isHello={true} />
        <HelloFun name={login} isHello={false} />
        <HelloFun name={login} />
        <HelloClass name={login} />
      </>
    );
  }
}

export default App;
