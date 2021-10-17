import React from 'react';
const HelloFun = (props) => {
  const { name, surname } = props;
  return (
    <div>
      Hello, {name} {surname}!
    </div>
  );
};

export default HelloFun;
