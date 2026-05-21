import React, { useState, useRef } from "react";
import "../App.css";
import img from "../assets/img/download.webp";
import music from "../assets/music/10._Zay_Manty.mp3";

const Music = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const forward = () => {
    if (audioRef.current) {
      audioRef.current.currentTime += 10;
    }
  };

  const backward = () => {
    if (audioRef.current) {
      audioRef.current.currentTime -= 10;
    }
  };

  return (
    <div className="music"> 
      <figure>
        <img src={img} alt="Music Cover" />
      </figure>
      
      <div className="range">
        <h4>زي م انتي</h4>
        <p>لحبيبتي ايه</p>
      </div>
      
      <div className="controls">
        <button type="button" id="forward" onClick={forward}>
          <i className="fa-solid fa-forward"></i>
        </button>

        <button type="button" id="play-btn" onClick={togglePlay}>
          {isPlaying ? (
            <i className="fa-solid fa-pause"></i>
          ) : (
            <i className="fa-solid fa-play"></i>
          )}
        </button>

        <button type="button" id="backward" onClick={backward}>
          <i className="fa-solid fa-backward"></i>
        </button>
      </div>

      <audio ref={audioRef} src={music} style={{ display: 'none' }}></audio>
    </div>
  );
};

export default Music;
