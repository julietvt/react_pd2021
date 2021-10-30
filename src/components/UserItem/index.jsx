import React, { Component } from 'react';

class UserItem extends Component {
    constructor(props){
        super(props);
    }
  render() {
      const{ user: {id, name, surname}} = props;
    return (
      <li>id "{id}" fullname: "{name} {surname}"</li>
    );
  }
}
export default componentName;
