import React, {useState, useContext} from 'react';
import CONSTANTS from './constants';
import { ThemeContext } from '../../contexts';

const stylesMap = {
    [CONSTANTS.THEMES.LIGHT]: {
        backgroundColor: 'white',
        color: 'black',
        height: '100vh',
        weight: '100vw',
    },
    [CONSTANTS.THEMES.DARK]: {
        backgroundColor: 'black',
        color: 'white',
        height: '100vh',
        weight: '100vw',
    },
};

function ThemeComponent(props){
    const [theme, setTheme] = useState(CONSTANTS.THEMES.LIGHT);
    const switchTheme = () => {
        setTheme(theme == CONSTANTS.THEMES.DARK 
            ? CONSTANTS.THEMES.LIGHT 
            : CONSTANTS.THEMES.DARK);
    };
    return(
        <div style={stylesMap[theme]}>
            <button onClick={switchTheme}>switch theme</button>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, minima expedita. Sunt culpa nesciunt quam cupiditate odit magnam quas error aut autem maiores, dolorum ea, ad excepturi accusamus nemo blanditiis mollitia debitis vel nam aspernatur placeat possimus quia reprehenderit. Provident laudantium quidem autem adipisci aliquam quam eum hic voluptate eveniet!</p>
        </div>
    );
};

export default ThemeComponent;

