import React from 'react';

function SelectedUsersList(props) {
  const { users } = props;
  const filteredUsers = users.filter((u) => u.isSelected);
  return (
    <ol>
      {filteredUsers.map((fu) => (
        <li>{fu.name}</li>
      ))}
    </ol>
  );
}

export default SelectedUsersList;
