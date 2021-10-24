import './App.css';
import React, { Component } from 'react';
import MouseTracker from './components/MouseTracker';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMounted: false,
    };
  }

  render() {
    return (
      <>
        <button
          onClick={() => {
            this.setState({ isMounted: !this.state.isMounted });
          }}
        >
          Show/Hide
        </button>
        {this.state.isMounted && <MouseTracker />}
      </>
    );
  }
}

export default App;

//props step
