import React, { Component } from 'react';
import InputField from './InputField';
import './MediaArray.css';

class MediaArray extends Component {
    render() {
        const {urls, trackUrl, userInput, pushToArray, handlePlay} = this.props
    return (
        <div className="arrayDisplay">
            <InputField trackUrl={trackUrl} userInput={userInput} pushToArray={pushToArray}/>
            <ul>
            {urls.map((url, index) => <li key={index} onClick={() => handlePlay(url)}>
                {url}
                </li>)}
            </ul>
        </div>
    )
}
}

export default MediaArray

