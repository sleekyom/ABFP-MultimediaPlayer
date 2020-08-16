import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';
import './InputField.css';

 class InputField extends Component {
    
    render(){
        const { trackUrl, userInput, pushToArray, trackName} = this.props
    return (
        <div className="inputField">
            <Form className="track">

              <Form.Group>
                <Form.Label>Insert your Url</Form.Label>
                <Form.Control size="sm" type="text" id="name" name="trackName" value={trackName} placeholder="Add track name" onChange={trackUrl}/>
              </Form.Group>

              <Form.Group>
                <Form.Control size="sm" type="text" name="userInput" id="track" placeholder="Add track link" onChange={trackUrl} value={userInput} />
              </Form.Group>

              <Button size="sm" variant="dark" type="submit" onClick={pushToArray} value="add">
                Add
              </Button>
            </Form>
        </div>
    )      
}
}

export default InputField;