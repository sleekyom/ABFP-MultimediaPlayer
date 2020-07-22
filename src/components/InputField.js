import React from 'react';
import './InputField.css';

export default function InputField() {

    let urls = [];
    let userInput;

    function trackUrl(e){
        userInput=e.target.value
        this.setState()
    }

    function pushToArray(e){
        e.preventDefault();
        urls.push(userInput)
        userInput="";
        console.log(urls);
        
    }
    
    return (
        <div className="inputField">
            <form>
                <label>Insert your Url:</label>
                <input type="text" placeholder="Add track" onChange={trackUrl}/>
                <input type="submit" onClick={pushToArray} value="add" />
            </form>
        </div>
    )

  
        
}
