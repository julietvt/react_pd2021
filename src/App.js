import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Component } from 'react';
import HelloFun from './components/HelloFun';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: 'undefined user',
    };
  }
  render() {
    const { login } = this.state;
    return <HelloFun name={login} />;
  }
}

export default App;
