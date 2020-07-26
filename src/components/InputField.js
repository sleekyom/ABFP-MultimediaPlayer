import React, { Component } from 'react';
import './InputField.css';

 class InputField extends Component {
    // state = {
    //  urls: [],
    //  userInput:""
    // }

    //  trackUrl = (e) => {
    //     this.setState({userInput: e.target.value});
    //     this.props.userUrlValue(this.userInput);
    // }

    //  pushToArray(e){
    //     e.preventDefault();
    //     if(this.userInput===""){
    //         return;
    //     } else{
    //         this.urls.push(this.userInput)
    //         localStorage.userPlaylist = JSON.stringify(this.urls);
    //         this.userInput="";
    //         console.log(this.urls);
    //     }  
    // }
    
    render(){
        const { trackUrl, userInput, pushToArray} = this.props
    return (
        <div className="inputField">
            <form className="track">
                <label>Insert your Url:</label>
                <input type="text" id="track" placeholder="Add track" onChange={trackUrl} value={userInput}/>
                <input type="submit" onClick={pushToArray} value="add" />
            </form>
        </div>
    )      
}
}

export default InputField;