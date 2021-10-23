import './App.css';
import React from 'react';
import { Component } from 'react';
import User from './components/User';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Grut',
      age: 25,
      isSelected: false,
    };
  }

  clickHandler = () => {
    const { isSelected } = this.state;
    this.setState({ isSelected: !isSelected });
  };

  render() {
    const { name, age, isSelected } = this.state;
    return (
      <User
        name={name}
        age={age}
        isSelected={isSelected}
        clickHandler={this.clickHandler}
      />
    );
  }
}

// Parent -> Child : props
// Child -> Parent : callback

export default App;

//props step
