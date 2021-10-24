import React, { Component } from 'react';
import UsersListItem from './UsersListItem';

class UsersList extends Component {
  mapUsers = (u, index) => {
    const { id } = u;

    const clickHandler = () => {
      const { users, setUsers } = this.props;
      const newUsers = [...users];

      newUsers[index] = {
        ...newUsers[index],
        isSelected: !newUsers[index].isSelected,
      };

      setUsers(newUsers);
    };

    return <UsersListItem key={id} user={u} clickHandler={clickHandler} />;
  };

  //[user1, user2] [<li>user1<li>,</li>user2</li>]
  // Для key брать id
  // Брать index опасно!!!
  render() {
    const { users } = this.props;
    return <ul>{users.map(this.mapUsers)}</ul>;
  }
}

export default UsersList;
