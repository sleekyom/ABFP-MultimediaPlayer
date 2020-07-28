import React, {useEffect, useRef, useState} from 'react';
//import {play, stop, forward, backward} from './components/MediaFunctions'
import './MediaDisplay.css';

function MediaDisplay({action, audioRef, currentPlaying, playing}) {


const data = localStorage.getItem("test")
console.log(JSON.parse(data));

    
    return (
        <div className={playing ? "mediaDisplay play" : "mediaDisplay"}>
            <audio src={currentPlaying  && currentPlaying.link} id="audio" ref={audioRef}>
                
            </audio>


            <a href="http://www.ilfondamento.be/wp-content/uploads/2019/08/musicworkshop-image.jpg">

         <img className="isDisabled" src="http://www.ilfondamento.be/wp-content/uploads/2019/08/musicworkshop-image.jpg"
         width="510" height="470" alt="music-art" id="cover"/>
            </a>
    <span style={{color: "white", position:"absolute", left:"185px", bottom: "60px", textAlign: "center", justifyContent: "center"}}>{`Now Playing ${currentPlaying && currentPlaying.name}`}</span>
        </div>

    )
}
export default MediaDisplay
