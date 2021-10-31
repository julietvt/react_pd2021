// React Form

import React, { Component } from 'react';

export default class SimplyForm extends Component {
  constructor(props){
      super(props);
      this.state = {
          userEmail: '',
          userPassword: '',
      };
  }
  setEmail = ({target: {value}}) => {
      this.setState({userEmail: value});
  }
  setPassword = ({target: {value}}) => {
      this.setState({userPassword: value});
  }
  handleSubmit = e => {
      e.preventDefault();
  }
  render() {
      const {userEmail, userPassword} = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
          <input type="email" name="userEmail" value={userEmail} onChange={this.setEmail} placeholder="email"></input>
          <input type="password" name="userPassword" value={userPassword} onChange={this.setPassword} placeholder="password"></input>
          <button type="submit">Send</button>
      </form>
    );
  }
}
