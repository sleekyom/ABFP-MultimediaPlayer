import React from 'react';
import './InputField.css';

export default function InputField() {
    return (
        <div className="inputField">
            <form>
                <label>Insert your Url:</label>
                <input type="text"/>
                <input type="button" value="add" />
            </form>
        </div>
    )
}
