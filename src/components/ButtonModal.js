import React from 'react';
import "./ButtonModal.css"

const ButtonModal = ({togglePlaying, playing, handleNext, handlePrev}) => {
    
    return (
        <div className="controlPanel">
             <button className="controls" id="backward" onClick={handlePrev}><i className="fa fa-backward"></i></button>
             {playing ?  <button className="controls" id="pause" onClick={togglePlaying} ><i className="fa fa-pause"></i></button> : <button className="controls" id="play" onClick={togglePlaying}><i className="fa fa-play"></i></button>}
           
            
             <button className="controls" id="forward" onClick={handleNext} ><i className="fa fa-forward"></i></button>
        </div>
    )
}

export default ButtonModal

