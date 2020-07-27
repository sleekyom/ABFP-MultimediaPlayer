import React, {useEffect, useRef, useState} from 'react';
//import {play, stop, forward, backward} from './components/MediaFunctions'
import './MediaDisplay.css';

function MediaDisplay({action, audioRef, currentPlaying, playing}) {


   

//     const handleMediaAction=()=>{
//         switch (action) {
//     case "stop":
//       myAudio.stop();
//       break;

//     case "play":
//       myAudio.play();
//       break;

//     case "forward":
//       myAudio.forward();
//       break;
    
//     case "backward":
//         myAudio.backward();
//         break;
//     default:
//       break;
//   }


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
    <span>{currentPlaying && currentPlaying.name}</span>
        </div>

    )
}
export default MediaDisplay
