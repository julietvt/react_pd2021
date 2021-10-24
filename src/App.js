import './App.css';
import React, { Component } from 'react';
import UsersList from './components/UsersList';
import SelectedUsersList from './components/SelectedUsersList';

const usersDB = [
  { id: 1, name: 'Grut', age: 25 },
  { id: 2, name: 'Elsa', age: 20 },
];
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: usersDB.map((u) => ({
        ...u,
        isSelected: false,
      })),
    };
  }

  setUsers = (newUsers) => {
    this.setState({ users: newUsers });
  };

  render() {
    const { users } = this.state;
    return (
      <>
        <UsersList setUsers={this.setUsers} users={users} />
        <SelectedUsersList users={users} />
      </>
    );
  }
}

// Parent -> Child : props
// Child -> Parent : callback
// Child -> Child : подъем состояния

export default App;

//props step
