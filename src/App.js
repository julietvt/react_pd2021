import logo from './logo.svg';
import './App.css';
import ReactFun from './components/Hello_fun';
import ReactClass from './components/Hello_class';
import React from 'react';
/*
React компоненты 
1. функциональный (function) !!!  hooks
2. класс (class)


props => (Компонент)
*/

function App() {
  return (
    <>
      <ReactFun />
      <ReactClass />
    </>
  );
}

export default App;
