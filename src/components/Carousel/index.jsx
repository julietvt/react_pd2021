import React, { useState} from 'react'
import Slide from './Slide';
import Slider from './Slider';

function Carousel(props) {
  const { slides } = props;

  const [index, setIndex] = useState(0);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [timerId, setTimerId] = useState(null); 
  
  const setFullScreenMode = (isFullScreen) => {
    !isFullScreen
      ? (setWidth("50%") && setHeight("50%"))
      : (setWidth("300") && setHeight("300"));
  };

  const start = () => {
    if (!timerId) {
      setTimerId(setInterval(setNext, 2000));
    }
  };

  const stop = () => {
    clearInterval(timerId);
    setTimerId(null);
  };

  const startPlay = (isPlay) => {
    !isPlay ? start() : stop();
  };

  const setNext = () => {
    setIndex((index + 1) % slides.length);
  };

  const setPrev = () => {
    setIndex((index - 1 + slides.length) % slides.length);
  };
    return (
      <div>
        <Slide currentImage={slides[index]} width={width} height={height} />
        <Slider
          next={setNext}
          prev={setPrev}
          setFullScreenMode={setFullScreenMode}
          startPlay={startPlay}
        />
      </div>
    );
  }


export default Carousel;

