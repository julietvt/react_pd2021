import './App.css';
import React, { Component } from 'react';
import ClockMatrix from './components/ClockMatrix';
import DivRender from './components/DivRender';

const App = () => {
  return (
    <div>
      <ClockMatrix />
      <DivRender />
    </div>
  );
};

export default App;
