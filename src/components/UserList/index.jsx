import React, { Component } from 'react';
import UserItem from '../UserItem';

const UserList = (props) => {
    const {users, updateUsers} = props;
    const mapUser = (user, index) => {
        const selectUserHandler = () => {
            const updUsers = [...users];
            updUsers[index].isSelected = !updUsers[index].isSelected;
            updateUsers(updUsers);
        };
        return <UserItem key={user.id} user={user} onSelectUser={selectUserHandler} isSelected={user.isSelected} />;
    }
    return (
      <ul>{users.map(mapUser)}</ul>
    );
}

export default UserList;