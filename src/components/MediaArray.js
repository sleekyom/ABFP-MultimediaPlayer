import React, { Component } from 'react';
import InputField from './InputField';
import './MediaArray.css';

class MediaArray extends Component {
    render() {
        const {urls, trackUrl, userInput, pushToArray, handlePlay, globalState} = this.props
    return (
        <div className="arrayDisplay">
            <InputField trackUrl={trackUrl} userInput={userInput} pushToArray={pushToArray} trackName={globalState.trackName}/>
            <ul>
            {urls.map((url, index) => <li key={index} onClick={() => handlePlay(url.link, index, url.name)} style={{cursor: "pointer"}}>
                {url.name}
                </li>)}
            </ul>
        </div>
    )
}
}

export default MediaArray

