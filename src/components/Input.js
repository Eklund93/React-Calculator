import React, { Component } from 'react';
import './Input.css';

class Input extends Component {
    render() {
        return (
            <div
            className="input">
            {this.props.children}
            </div>
        )
    }
}

export default Input;

// This code just makes sure that the properties are shown in the input field