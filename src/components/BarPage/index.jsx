import React from "react";
import { headerContext } from "../../contexts";
import styles from './BarPage.module.scss';
const BarPage = () => {
    return(
        <headerContext.Consumer>
            {logo => {
                return(
                    <div className={styles.barContainer}>
                        <h2>{logo.namelogo}</h2>
                        <h3>{logo.greeting}</h3>
                        <img src={logo.src} />
                    </div>
                )
            }}
        </headerContext.Consumer>
    )
}
export default BarPage;