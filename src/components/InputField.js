import React, { Component } from 'react';
import './InputField.css';

 class InputField extends Component {
    
    render(){
        const { trackUrl, userInput, pushToArray, trackName} = this.props
    return (
        <div className="inputField">
            <form className="track">
                <label>Insert your Url:</label>
                <input type="text" id="name" name="trackName" value={trackName} placeholder="Add track name" onChange={trackUrl} />
                <input type="text" name="userInput" id="track" placeholder="Add track" onChange={trackUrl} value={userInput}/>
                <input type="submit" onClick={pushToArray} value="add" />
            </form>
        </div>
    )      
}
}

export default InputField;