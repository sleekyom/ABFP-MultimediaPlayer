import React from 'react';
import "./ButtonModal.css"

const ButtonModal = () => {
    return (
        <div className="controlPanel">
             <button className="controls"><i className="fa fa-stop"></i></button>
             <button className="controls"><i className="fa fa-backward"></i></button>
             <button className="controls"><i className="fa fa-play"></i></button>
             <button className="controls"><i className="fa fa-pause"></i></button>
             <button className="controls"><i className="fa fa-forward"></i></button>
             <button className="controls"><i className="fa fa-volume-up"></i></button>
        </div>
    )
}

export default ButtonModal

