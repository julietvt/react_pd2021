import { eachDayOfInterval, endOfWeek, startOfWeek } from 'date-fns/esm';
import React from 'react';
import Day from './Day';
import PropTypes from 'prop-types';

const getWeek = ({date, weekDate, currentDate}) => {
    eachDayOfInterval({
        start: startOfWeek(weekDate),
        end: endOfWeek(weekDate),
    }).map((dayDate) => <Day key={dayDate} dayDate={dayDate} date={date} currentDate={currentDate} />
    );
}

const Week = (props) => <ul>{getWeek(props)}</ul>;

Week.propTypes = {
    date: PropTypes.instanceOf(Date).isRequired, 
    weekDate:  PropTypes.instanceOf(Date).isRequired, 
    currentDate:  PropTypes.instanceOf(Date).isRequired
};
Week.defaultProps = {
    currentDate: new Date()
};

export default Week;