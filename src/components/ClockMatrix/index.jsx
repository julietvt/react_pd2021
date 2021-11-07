import { addMilliseconds, format } from "date-fns";
import React, {useState, useEffect} from "react";
import styles from './ClockMatrix.module.scss';

function ClockMatrix(props){
    const [time, setTime] = useState(new Date(0,0,0,0,0,0));
    const [isRun, setIsRun] = useState(false);    
    const handleReset = () => {
        setTime(new Date(0,0,0,0,0,0));
    };
    const handleRunning = () => {
        setIsRun(!isRun);
    }
    useEffect(() => {
        if(isRun){
            const idTimer = setInterval(()=>{
                setTime(addMilliseconds(time,1000));
            },1000);
            return () => {
                clearInterval(idTimer);
            }
        }
    });
    return (
        <div className={styles.bodyClock}>
            <h2 className={styles.matrixDigits}>{format(time, 'HH:mm:ss')}</h2>
            <button className={styles.btn} onClick={handleRunning}>
                {isRun ? 'Stop' : 'Start'}
            </button>
            <button className={styles.btn} onClick={handleReset}>Reset</button>
        </div>
    );
}
export default ClockMatrix;