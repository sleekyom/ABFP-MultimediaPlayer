import React, { Component } from 'react';
import InputField from './InputField';
import './MediaArray.css';
import { ListGroup } from 'react-bootstrap';

class MediaArray extends Component {
    render() {
        const {urls, trackUrl, userInput, pushToArray, handlePlay, globalState, deleteSong} = this.props
    return (
        <div className="arrayDisplay">
            <InputField trackUrl={trackUrl} userInput={userInput} pushToArray={pushToArray} trackName={globalState.trackName}/>

            <ListGroup variant="flush">
            {urls.map((url, index) =>  <ListGroup.Item as="li" key={index}  style={{cursor: "pointer"}}>
            <div style={{display:"flex", justifyContent: "space-between"}}>
                <span onClick={() => handlePlay(url.link, index, url.name)}>{url.name}</span>
                <span onClick={() => deleteSong(index)}>X</span>
            </div>
            </ListGroup.Item>)}
            </ListGroup>
        </div>
         )
    }
}

export default MediaArray

