import React, { Component } from 'react';
import UserItem from '../UserItem';

export default class UserList extends Component {
    constructor(props){
        super(props);
        this.state = {users: [{id:1, name: 'name1', surname:'surname1'},{id:2, name: 'name2', surname:'surname2'},{id:3, name: 'name3', surname:'surname3'},{id:4, name: 'name4', surname:'surname4'},{id:1, name: 'name4', surname:'surname4'} ]};
    }
    mapUser = (user) => {
        return <UserItem key={user.id} user={user} />;
    }
  render() {
      const {users} = this.state;
    return (
      <ul>{users.map(this.mapUser)}</ul>
    );
  }
}
