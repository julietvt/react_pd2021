import React, {useState, useEffect} from "react";

function Clicker () {
    const [clickCount, setClickCount] = useState(0);

    const handleClick = () => {
        setClickCount(clickCount + 1);
    };

    useEffect(() => {
        document.body.addEventListener('click', handleClick);
        console.log("Add element ", clickCount);
        return () => {
            document.body.removeEventListener('click', handleClick);
            console.log('Remove element', clickCount);
        }
    },[]);

    useEffect(() => {
        console.log('Now effect is ', clickCount);
        return () => {
            console.log("Clear effect is ", clickCount);
        };
    });
    return <div>{clickCount}</div>;
}

export default Clicker;