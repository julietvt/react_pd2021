import React, { Component } from 'react';
import Month from './Month';
import PropTypes from 'prop-types';

const Calendar = ({currentDate}) => {
  return(
    <div>
      <Month date={currentDate} currentDate={currentDate}/>
    </div>
  )
}

Calendar.propTypes = {
  currentDate: PropTypes.instanceOf(Date),
};
Calendar.defaultProps = {
  currentDate: new Date(),
}

export default Calendar;
