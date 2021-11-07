import React, { useState,useEffect } from 'react';

export default function ViewPortParamsFun(props) {
    const [w, setW] = useState(window.innerWidth);
    const [h, setH] = useState(window.innerHeight);

    const handleResize = () => {
        setW(window.innerWidth);
        setH(window.innerHeight);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize); 
     });

    return (
            <div>
                <h2>Viewport width {w}</h2>
                <h2>Viewport height {h}</h2>                
            </div>
        );
}