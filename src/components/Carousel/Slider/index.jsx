import React, { useState } from 'react';
import Icon from "@mdi/react";
import {
  mdiSkipNext,
  mdiSkipPrevious,
  mdiFullscreen,
  mdiPause,
  mdiPlay,
  mdiFullscreenExit,
} from "@mdi/js";
function Slider(props){
    const {next, prev, setFullScreenMode} = props; 

    const [isPlay, setIsPlay] = useState(false);
    const [isFullScreen, setIsFullScreen] = useState(false);
 
    const handlerPlay = () => setIsPlay(!isPlay);    
  
    const handleFullScreen = () => {
        setIsFullScreen(!isFullScreen);
        setFullScreenMode(isFullScreen);
    };
        return (
            <div>
                <div>
                    <Icon onClick={prev} path={mdiSkipPrevious}/>
                    <Icon onClick={next} path={mdiSkipNext}/>
                </div>
                <div>
                    <Icon onClick={handlerPlay} path={isPlay ? mdiPause : mdiPlay}/>
                    <Icon onClick={handleFullScreen} path={isFullScreen ? mdiFullscreenExit : mdiFullscreen}/>
                </div>                
            </div>
        );
}

export default Slider;