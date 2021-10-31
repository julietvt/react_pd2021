import React, { Component } from 'react'
import Slide from './Slide';
import Slider from './Slider';

export default class Carousel extends Component {
    constructor(props){
        super(props);
        this.state = {
            index: 0,
            width: 0,
            height: 0
        };
    };
    setFullScreenMode = (isFullScreen) => {}
    setNextImage= ()=> {}
    setPrevImage= ()=> {}
    render() {
        const {index} = this.state;
        const {slides} = this.props;
        return (
            <div>
                <Slide currentImage={slides[index]} />
                <Slider next={this.setNextImage} prev={this.setPrevImage}  setFullScreenMode={this.setFullScreenMode} />                
            </div>
        );
    }
}

//window
//window.innerHeight
//window.innerWidth