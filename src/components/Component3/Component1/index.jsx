// You have 100 level !!!!

import React from "react";
import styles from '../TotalComponents.module.scss';

function Component1(props){
    const {level} = props;
    return(
        <div className={styles.styleForComponent1}>
            <p>Component1</p>
            <p>You have {level} game level!!!</p>
        </div>
    );
}
export default Component1;