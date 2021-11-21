import './App.css';
import React, { Component } from 'react';
import Home from './pages/Home';
import { headerContext } from './contexts';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logo: {
        namelogo: 'Freshcode',
        greeting: 'Hello fullstack dev!',
        src: 'https://s.dou.ua/CACHE/images/img/static/companies/Icon_IzLWz0u/ebf7da2c584be3f3c277d8c41c2150c8.png',
      },
      url: '',
      theme: 'light',
    };
  }
  render() {
    return (
      <headerContext.Provider value={this.state.logo}>
        <Home />
      </headerContext.Provider>
    );
  }
}

export default App;
