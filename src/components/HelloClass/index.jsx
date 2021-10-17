import React from "react";
import {Component} from 'react';

class HelloClass extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return <div>Hello {this.props.name}</div>;
    }
}
export default HelloClass;

