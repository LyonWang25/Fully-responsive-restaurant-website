import React, { useState } from 'react';
import { meal } from '../../constants';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';

import './Intro.css';

const Intro = () => {
  const [playVideo, setplayVideo] = React.useState(false)
    const vidRef = React.useRef();
    const handleVideo = () =>{
      setplayVideo((prevPlayVideo) => !prevPlayVideo);
      
      if(playVideo){
        vidRef.current.pause();
      }
      else{
        vidRef.current.play();

      }
    }
    
    return(
  <div className="app__video">
    <video src={meal} type="video/mp4" ref={vidRef} loopo controls={false} muted></video>
      <div className="app__video-overlay flex__center">
        <div className="app__video-overlay_circle flex__center"
        onClick =  {handleVideo}
        >
          {playVideo ? (
            <BsPauseFill color="#FFF" fontSize={30}/>
          ) : <BsFillPlayFill color="#FFF" fontSize={30} />}
        </div>
      </div>
  </div>
    )
};

export default Intro;
