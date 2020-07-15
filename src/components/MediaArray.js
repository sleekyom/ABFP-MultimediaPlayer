import React from 'react';
import InputField from './InputField';
import './MediaArray.css';

function MediaArray() {
    let media = [];
    
    return (
        <div className="arrayDisplay">
            <InputField />
            <ul>
                <li>Pop</li>
                <li>Afro beat</li>
                <li>Salsa</li>
                <li>jazz</li>
            </ul>
        </div>
    )
}

export default MediaArray

