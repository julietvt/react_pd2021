import React, { useState } from 'react';

function Slide({currentImage, width, height}) {
    const [img, setImg] = useState(new Image());
    const load = () => {
        img.src = currentImage.src;
    }
    //componentDidMount(){ this.load(); }
    return(
            <div>
                <img src={currentImage.src} alt="image" width={width} height={height}>
                    <figcaption>{currentImage.title}</figcaption>
                </img>                
            </div>
    );
}

export default Slide;
