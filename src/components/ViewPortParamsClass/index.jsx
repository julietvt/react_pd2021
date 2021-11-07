import React, { Component } from 'react';

export default class ViewPortParamsClass extends Component {
    constructor(props){
        super(props);
        this.state = {
            w: window.innerWidth,
            h: window.innerHeight,
        };
    }
    componentDidMount () {
        window.addEventListener('resize', this.handleResize);
    }
    handleResize = () => {
        this.setState({
            w: window.innerWidth,
            h: window.innerHeight,
        });
    };
    componentWillUnmount(){
        window.removeEventListener('resize', this.handleResize);
    }
    render() {
        const {w,h} = this.state;
        return (
            <div>
                <h2>Viewport width {w}</h2>
                <h2>Viewport height {h}</h2>                
            </div>
        );
    }
}
