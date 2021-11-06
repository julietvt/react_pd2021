import React, { useState, useEffect } from 'react';

function Stopwatch (props){
  const [time, setTime] = useState(0);
  const [isRun, setIsRun] = useState(false);

  useEffect(()=> {
      if(isRun){
          const timerId = setInterval(()=> {
              setTime(time+1);
          },1000);
      return () => {
          clearInterval(timerId);
      };
    }
  }, [isRun, time]);

    return (
      <article>
          <h1>{time}</h1>
          <button onClick={() => setIsRun(!isRun)}>{isRun ? 'stop' : 'start'}</button> 
      </article>
    );
  
}

export default Stopwatch;
