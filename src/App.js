import './App.css';
import React, { Component } from 'react';
import CounterHook from './components/CounterHook';

const App = () => {
  return <CounterHook step={5} />;
};

export default App;
