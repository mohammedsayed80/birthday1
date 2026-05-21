import React from "react";
import "../App.css";
import img from "../assets/img/download.webp";
import music from "../assets/music/10._Zay_Manty.mp3";
const Music = () => {
  const Music = document.getElementById("AudioMusic");
  const playBtn = document.getElementById("play-btn");
  return (
    <div class="music">
      <figure>
        <img src={img} alt="" />
      </figure>
      <div class="range">
        <h4>زي م انتي</h4>
        <p>لحبيبتي ايه</p>
      </div>
      <div class="controls">
        <button type="button" id="forward" onClick={() => {
          Music.currentTime += 10;
        }}>
          <i class="fa-solid fa-forward"></i>
        </button>
        <button type="button" id="play-btn" onClick={() => {
          if (Music.paused) {
            Music.play();
            playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
          } else {
            Music.pause();
            playBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
          }
        }}>
          <i class="fa-solid fa-play"></i>
        </button>
        <button type="button" id="backward" onClick={() => {
          Music.currentTime -= 10;
        }}>
          <i class="fa-solid fa-backward"></i>
        </button>
      </div>
      <audio src={music} style={{display:'none'}} id="AudioMusic"></audio>
    </div>
  );
};

export default Music;
