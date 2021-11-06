import { is } from "date-fns/locale";
import React, {useState, useEffect} from "react";

import Clicker from '../Clicker';

function ClickerClear(){
    const [isVisible, setIsVisible] = useState(false);

    return(
        <div>
            <button onClick={()=> {setIsVisible(!isVisible);}}>Switch</button>
            {isVisible && <Clicker />}
        </div>
    )
}

export default ClickerClear;
