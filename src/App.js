import './App.css';
import React, { Component } from 'react';
import Stopwatch from './components/Stopwatch';
import UserList from './components/UserList';
import SelectUsers from './components/SelectUsers';

const db = [
  { id: 1, name: 'name1', surname: 'surname1' },
  { id: 2, name: 'name2', surname: 'surname2' },
  { id: 3, name: 'name3', surname: 'surname3' },
  { id: 4, name: 'name4', surname: 'surname4' },
  { id: 5, name: 'name5', surname: 'surname5' },
];
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { users: db.map((u) => ({ ...u, isSelected: false })) };
  }
  updateUsers = (newUsers) => {
    this.setState({ users: newUsers });
  };
  render() {
    const { users } = this.state;
    return (
      <>
        <UserList users={users} updateUsers={this.updateUsers} />
        <SelectUsers users={users} />
      </>
    );
  }
}

export default App;
