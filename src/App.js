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
      login: 'anonym',
      isHelloMode: true,
    };
  }
  changeMode = () => {
    const { isHelloMode } = this.state;
    this.setState({ isHelloMode: !isHelloMode });
  };
  render() {
    const { login, isHelloMode } = this.state;
    return (
      <>
        <button onClick={this.changeMode}> change hello mode </button>
        <HelloFun name={login} isHello={isHelloMode} />
      </>
    );
  }
}

export default App;
