// You have 100 level !!!!

import React from "react";

function Component1(props){
    const {level} = props;
    return(
        <div>
            <p>Component1</p>
            <p>You have {level} game level!!!</p>
        </div>
    );
}
export default Component1;