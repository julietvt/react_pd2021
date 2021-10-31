import React, { Component } from 'react';
import {format, isSameDay} from 'date-fns';
import { isSameMonth } from 'date-fns/esm';
import classNames from 'classnames';
import styles from './Day.module.scss';
import PropTypes from 'prop-types';

const Day = ({date, dayDate, currentDate}) => {
  const isCurrentDay = isSameMonth(dayDate, currentDate) && isSameDay(dayDate, currentDate);
  const dayStyle = classNames(styles.day, {
    [styles.currentDay]: isCurrentDay,
    [styles.otherMonth]: !isSameMonth(dayDate, date),
  });
  return <li>{format(dayDate,'d')}</li>;
};

Day.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  dayDate: PropTypes.instanceOf(Date).isRequired,
  currentDate: PropTypes.instanceOf(Date).isRequired,
};

Day.defaultProps = {
  customElements: new Date(),
}

export default Day;
