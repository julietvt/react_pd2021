import React, { Component } from 'react'
import Slide from './Slide';
import Slider from './Slider';

export default class Carousel extends Component {
    constructor(props){
        super(props);
        this.state = {
            index: 0,
            width: 0,
            height: 0,
            timerId: null,
        };
    };
     setFullScreenMode = (isFullScreen) => {
    !isFullScreen
      ? this.setState({ width: "50%", height: "50%" })
      : this.setState({ width: 300, height: 300 });
  };

  start = () => {
    if (!this.timerId) {
      this.timerId = setInterval(this.setNext, 2000);
    }
  };
  stop = () => {
    clearInterval(this.timerId);
    this.timerId = null;
  };
  startPlay = (isPlay) => {
    !isPlay ? this.start() : this.stop();
  };

  setNext = () => {
    const { index } = this.state;
    const { slides } = this.props;
    console.log(slides.length);
    this.setState({ index: (index + 1) % slides.length });
  };
  setPrev = () => {
    const { index } = this.state;
    const { slides } = this.props;
    console.log(slides.length);
    this.setState({ index: (index - 1 + slides.length) % slides.length });
  };

  render() {
    const { index, width, height } = this.state;
    const { slides } = this.props;
    return (
      <div>
        <Slide currentImage={slides[index]} width={width} height={height} />
        <Slider
          next={this.setNext}
          prev={this.setPrev}
          setFullScreenMode={this.setFullScreenMode}
          startPlay={this.startPlay}
        />
      </div>
    );
  }
}


