import React from 'react';
import "./ButtonModal.css"

const ButtonModal = () => {
    return (
        <div className="controlPanel">
             <button className="controls" id="stop"><i className="fa fa-stop"></i></button>
             <button className="controls" id="backward"><i className="fa fa-backward"></i></button>
             <button className="controls" id="play"><i className="fa fa-play"></i></button>
             <button className="controls" id="pause"><i className="fa fa-pause"></i></button>
             <button className="controls" id="forward"><i className="fa fa-forward"></i></button>
             <button className="controls" id="volume"><i className="fa fa-volume-up"></i></button>
        </div>
    )
}

export default ButtonModal

