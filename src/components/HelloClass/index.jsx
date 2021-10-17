import React from "react";
import {Component} from 'react';

class HelloClass extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
        <div>
            {this.props.isHello ? 'Hello' : 'Goodbye'} {this.props.name}
        </div>
  );
    }
}
export default HelloClass;

