import './App.css';
import React, { Component } from 'react';

// Методы жизненного цикла применимы к классовым компонентам
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.updatedCounter = 0;
    console.log(`Constructor`);
  }

  // after 1st render
  componentDidMount() {
    console.log(`Did mount`);
  }

  // after 2-... renders
  componentDidUpdate(prevProps, prevState) {
    this.updatedCounter++;
    console.log(`Did update`, this.updatedCounter);
  }

  // before unmount
  componentWillUnmount() {}

  render() {
    return (
      <>
        <div>{this.state.count}</div>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 5 });
          }}
        >
          +
        </button>
      </>
    );
  }
}

// Parent -> Child : props
// Child -> Parent : callback
// Child -> Child : подъем состояния

export default App;

//props step
