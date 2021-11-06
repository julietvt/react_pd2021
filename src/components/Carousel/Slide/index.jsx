import React, { useState, useEffect } from 'react';

function Slide({currentImage, width, height}) {
    const [photo, setPhoto] = useState(new Image());
    const load = () => {
        //photo.src = currentImage.src;
        setPhoto(currentImage);
    }
    useEffect(() => {load();})
    return(
            <div>
                <img src={currentImage.src} alt="image" width={width} height={height}>
                    <figcaption>{currentImage.title}</figcaption>
                </img>                
            </div>
    );
}

export default Slide;
