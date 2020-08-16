import React from 'react';
import { Button } from 'react-bootstrap';
import "./ButtonPanel.css"

const ButtonModal = ({togglePlaying, playing, handleNext, handlePrev}) => {
    
    return (
        <div className="controlPanel">
            
                <Button variant="secondary" className="controls" id="backward" onClick={handlePrev}><i className="fa fa-backward"></i></Button>

                {playing ?  <Button variant="secondary" className="controls" id="pause" onClick={togglePlaying} ><i className="fa fa-pause"></i></Button> : <Button variant="secondary" className="controls" id="play" onClick={togglePlaying} ><i className="fa fa-play"></i></Button>}

                <Button variant="secondary" className="controls" id="forward" onClick={handleNext} ><i className="fa fa-forward"></i></Button>
           
        </div>
    )
}

export default ButtonModal

