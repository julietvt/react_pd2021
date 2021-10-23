import './App.css';
import React from 'react';
import { Component } from 'react';
import User from './components/User';
class App extends Component {
  render() {
    return <User />;
  }
}

// Создать компонент Car (в состоянии хранить марка, модель и цена)
// Брать элемент в зеленую рамку, если стоимость < 20000
// Иначе в синюю
// В инлайн стилях для марки указать цвет текста
export default App;

//props step
