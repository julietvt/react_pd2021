import './App.css';
import React, { Component } from 'react';
import Carousel from './components/Carousel';
import Stopwatch from './components/Stopwatch';
import slides from './components/Carousel/config';

const App = () => {
  return <Carousel slides={slides} />;
};

export default App;
