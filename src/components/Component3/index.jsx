// родитель 


import React, { useState } from 'react';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';
import Component1 from './Component1';
import Component2 from './Component2';
import styles from './TotalComponents.module.scss';

function Component3 (props) {
  const [level, setLevel] = useState(0);
  const handleLevel = ({target: {value}}) => {
      setLevel(value);
  };
  const handleSubmit = e => {
      e.preventDefault();
  };
    return (
      <div className={styles.styleForComponent3}>
          <form>
            <p>Component3</p>
            <input type="text" name="level" value={level} onChange={handleLevel}></input>
            <button type="submit">Send</button>
          </form>
          <Component1 level={level}/>
          <Component2 level={level} step={5} setNewLevel={setLevel}/>
      </div>
    );
}
export default Component3;
