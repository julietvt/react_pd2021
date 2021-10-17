import React from 'react';
const HelloFun = (props) => {
  const { name, isHello = true } = props;
  /*
  //1
  let str;
  if ({ isHello }) str = 'Hello';
  else str="Goodbye";
  return <div>{str}, {name}!</div>;
  //2
  let str;
  if ({ isHello }) str = <div>Hello, {name}!</div>;
  else str = <div>Bye, {name}!</div>;
  return str;
  */
  //3
  return (
    <div>
      {isHello ? 'Hello' : 'Goodbye'} {name}
    </div>
  );
};

export default HelloFun;
