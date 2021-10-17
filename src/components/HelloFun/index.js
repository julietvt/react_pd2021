import React from 'react';
const HelloFun = (props) => {
  const { name, isHello = true } = props;
  return (
    <div>
      {isHello ? 'Hello' : 'Goodbye'} {name}
    </div>
  );
};

export default HelloFun;
