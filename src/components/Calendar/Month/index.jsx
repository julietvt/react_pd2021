import { format } from 'date-fns';
import { eachWeekOfInterval, endOfMonth, startOfMonth} from 'date-fns/esm';
import React from 'react';
import Week from './Week';
import PropTypes from 'prop-types';

const getMonth = ({date, currentDate}) => {
    eachWeekOfInterval({
        start: startOfMonth(date),
        end: endOfMonth(date),
    }).map((weekDate) => <Week key={weekDate} weekDate={weekDate} date={date} currentDate={currentDate} />
    );
}

const Month = (props) => {
    const {date} = props;
    return(
        <div>
            <div>{format(date, 'LLLL yy d')}</div>
            <ul>
                <li>S</li>
                <li>M</li>
                <li>T</li>
                <li>W</li>
                <li>T</li>
                <li>F</li>
                <li>S</li>            
            </ul>
            {getMonth(props)}
        </div>
    )
};

Month.propTypes = {
    date: PropTypes.instanceOf(Date).isRequired, 
    currentDate: PropTypes.instanceOf(Date).isRequired
};
Month.defaultProps = {
    currentDate: new Date(),
};

export default Month;