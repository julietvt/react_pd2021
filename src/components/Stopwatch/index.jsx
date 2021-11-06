import React, { useState, useEffect } from 'react';

function Stopwatch (props){
  const [time, setTime] = useState(0);
  const [isRun, setIsRun] = useState(false);
  const [timerId, setTimerId] = useState(null);

  const tick = () => {
      setTimerId(setInterval(()=> {setTime(time+1)},1000));
  }

  const reset = () => {
      clearInterval(timerId);
  }
  
  useEffect(()=> {
      if(isRun){ tick(); }
      else { reset();}     
  }, [isRun, time]);

    return (
      <article>
          <h1>{time}</h1>
          <button onClick={() => setIsRun(!isRun)}>{isRun ? 'stop' : 'start'}</button> 
      </article>
    );
  
}

export default Stopwatch;
