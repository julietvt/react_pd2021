import React, { Component } from 'react';
import {format, isSameDay} from 'date-fns';
import { isSameMonth } from 'date-fns/esm';
import classNames from 'classnames';
import styles from './Day.module.scss';

const Day = ({date, dayDate, currentDate}) => {
  const isCurrentDay = isSameMonth(dayDate, currentDate) && isSameDay(dayDate, currentDate);
  const dayStyle = classNames(styles.day, {
    [styles.currentDay]: isCurrentDay,
    [styles.otherMonth]: !isSameMonth(dayDate, date),
  });
  return <li>{format(dayDate,'d')}</li>;
};

export default Day;
