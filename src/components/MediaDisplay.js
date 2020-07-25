import React from 'react';
import './MediaDisplay.css';

function MediaDisplay() {
    return (
        <div className="mediaDisplay">
            <audio src="tracks/MI.mp3" id="audio"></audio>
            <a href="http://www.ilfondamento.be/wp-content/uploads/2019/08/musicworkshop-image.jpg">

         <img className="isDisabled" src="http://www.ilfondamento.be/wp-content/uploads/2019/08/musicworkshop-image.jpg"
         width="510" height="470" alt="music-art" id="cover"/>
            </a>
        </div>
    )
}
export default MediaDisplay
