import React from "react";
import { headerContext } from "../../contexts";
import styles from './Header.module.scss';
const Header = () => {
    return (
        <headerContext.Consumer>
            {logo => {
                return(
                    <div className={styles.container}>
                        <h1>{logo.namelogo}</h1>
                        <img src={logo.src} />
                    </div>
                );
            }}
        </headerContext.Consumer>
    );
}
export default Header;