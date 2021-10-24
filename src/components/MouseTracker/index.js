import React, { Component } from 'react';

// Классовый компонент:
// 1. Состояние
// 2. Методы жизненного цикла

class MouseTracker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      x: 0,
      y: 0,
    };
    console.log(`constructor`);
  }

  moveCat = (e) => {
    this.setState({ x: e.clientX, y: e.clientY });
  };

  componentDidMount() {
    console.log(`did mount`);
    window.addEventListener('mousemove', this.moveCat);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(`did update`);
  }

  componentWillUnmount() {
    console.log(`will unmount`);
    window.removeEventListener('mousemove', this.moveCat);
  }

  render() {
    console.log(`render`);
    return (
      <div style={{ position: 'relative', height: '100vh' }}>
        <img
          style={{
            position: 'absolute',
            top: this.state.y,
            left: this.state.x,
          }}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD8UDiquzZSZnN65FtKuDFhTUsEMoztGhoqw&usqp=CAU"
          alt="cat"
        />
      </div>
    );
  }
}

export default MouseTracker;
