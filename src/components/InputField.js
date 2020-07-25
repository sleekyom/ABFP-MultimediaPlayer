import React from 'react';
import './InputField.css';

export default function InputField() {

    let urls = [];
    let userInput;

    function trackUrl(e){
        userInput = e.target.value;
    }

    function pushToArray(e){
        e.preventDefault();
        if(userInput===""){
            return;
        } else{
            urls.push(userInput)
            localStorage.userPlaylist = JSON.stringify(urls);
            userInput="";
            console.log(urls);
        }  
    }
    
    return (
        <div className="inputField">
            <form className="track">
                <label>Insert your Url:</label>
                <input type="text" id="track" placeholder="Add track" onChange={trackUrl}/>
                <input type="submit" onfocus="this.value=''" onClick={pushToArray} value="add" />
            </form>
        </div>
    )      
}
