import React from 'react';
import "./ButtonModal.css"

const ButtonModal = ({children}) => {
    return (
        <div className="buttonModal">
             <button>
                 {children}
            </button>
             {/* {this.props.children} */}
        </div>
    )
}

export default ButtonModal

