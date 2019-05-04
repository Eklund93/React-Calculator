import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
    isOperator = val => {
        return !isNaN(val) || val === "." || val === "=";
    };

    render() {
        return (
            <div
            className={`button ${this.isOperator
            (this.props.children) ? "" : "operator"}`}
            onClick={() => this.props.handleClick
            (this.props.children)}
            >
            {this.props.children}
            </div>
        )
    }
}

export default Button;

// !isNAN is a double negative, so makes sure it's a number, a decimal or an equal sign
// The code makes sure that if it's not a number, decimal or equal sign, then add the class of 'operator'