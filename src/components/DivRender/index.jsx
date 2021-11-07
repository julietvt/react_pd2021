import React, {useState, useEffect} from "react";
import styles from './DivRender.module.scss';

function DivRender(props){
    //state
    return (
        <div>
            <input type="text" placeholder="height" value={heightValue}></input>
            <input type="text" placeholder="width" value={widthValue}></input>
            <button onClick={RerenderDiv}>Rerender</button>
            <div className={styles.divStyle}>

            </div>
        </div>
    );
}
export default DivRender;