import React from 'react';
import PropTypes from 'prop-types';

const HelloFun = (props) => {
  const { name, isHello = true } = props;
  return (
    <div>
      {isHello ? 'Hello' : 'Goodbye'} {name}
    </div>
  );
};

HelloFun.propTypes = {
  name: PropTypes.string,
  isHello: PropTypes.bool,
};

HelloFun.defaultProps = {
  name: 'unknown',
};

export default HelloFun;
