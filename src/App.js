import React, { Component } from 'react'; 
import './App.css';
import Button from './components/Button';
import Input from './components/Input';
import ClearButton from './components/ClearButton';
import { throwStatement } from '@babel/types';

// This calculator is made without MathJS
// Future work would be that parseInt notice decimals as a number - use ParseFloat instead of ParseInt - COMPLETED
// Future work would be to put in percentage button like on iPhone, technically just divide by a 100

// TIP: Always ask yourself, what is the state now and what is supposed to happen to the state afterwards?

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      previousNumber: "",
      currentNumber: "",
      operator: "",
    };
  }

  // These are my 4 variables

  addToInput = val => {
    this.setState({ input: this.state.input + val });
  };

  // Here we just tell to add the value of the input

  addDecimal = val => {
    // I only want to add a decimal sign if no other is present - there can't be two decimals
    // This line of code searches for the decimal, the -1 makes sure it's not there beforehand
    // indexOf searches for string
    if (this.state.input.indexOf(".") == -1) {
      this.setState({ input: this.state.input + val });
    }
  };

  addZeroToInput = val => {
    // If this state input is not empty then add 0
    // I dont want 0 as the first number - not very calculator-like
    if (this.state.input !== "") {
      this.setState({ input: this.state.input + val });
    }
  };

  clearInput = () => {
    this.setState({ input: "" });
  }

  // Clears all inputs in the input field

  add = () => {
    // I use previousNumber to 'store' the number so it remembers like a calculator
    this.state.previousNumber = this.state.input;
    this.setState({ input: "" }); // left blank for new input
    this.state.operator = "plus";
  };

  subtract = () => {
    // I use previousNumber to 'store' the number
    this.state.previousNumber = this.state.input;
    this.setState({ input: "" }); // left blank for new input
    this.state.operator = "subtract";
  };

  divide = () => {
    // I use previousNumber to 'store' the number
    this.state.previousNumber = this.state.input;
    this.setState({ input: "" }); // left blank for new input
    this.state.operator = "divide";
  };

  multiply = () => {
    // I use previousNumber to 'store' the number
    this.state.previousNumber = this.state.input;
    this.setState({ input: "" }); // left blank for new input
    this.state.operator = "multiply";
  };

  evaluate = () => {
    this.state.currentNumber = this.state.input;

    if (this.state.operator == "plus") {
      this.setState({
          input: parseFloat(this.state.previousNumber) +
          parseFloat(this.state.currentNumber)
      });
    } else if (this.state.operator == "subtract") {
        this.setState({
          input:
          parseFloat(this.state.previousNumber) -
          parseFloat(this.state.currentNumber)
        });
    } else if (this.state.operator == "multiply") {
      this.setState({
        input:
        parseFloat(this.state.previousNumber) *
        parseFloat(this.state.currentNumber)
      });
    } else if (this.state.operator == "divide") {
      this.setState({
        input:
        parseFloat(this.state.previousNumber) /
        parseFloat(this.state.currentNumber)
      });
    }
  };

  // These are put under evaluate because it 'figures' out when executed
  // The input string is evaluated 

  render() {
    return (
      <div className="App">
       <div className="calc-wrapper">
          <div className="row">
          <Input>{this.state.input}</Input>
          </div>
          <div className="row">
          <Button handleClick={this.addToInput}>7</Button>
          <Button handleClick={this.addToInput}>8</Button>
          <Button handleClick={this.addToInput}>9</Button>
          <Button handleClick={this.divide}>/</Button>
          </div>
          <div className="row">
          <Button handleClick={this.addToInput}>4</Button>
          <Button handleClick={this.addToInput}>5</Button>
          <Button handleClick={this.addToInput}>6</Button>
          <Button handleClick={this.multiply}>*</Button>
          </div>
          <div className="row">
          <Button handleClick={this.addToInput}>1</Button>
          <Button handleClick={this.addToInput}>2</Button>
          <Button handleClick={this.addToInput}>3</Button>
          <Button handleClick={this.add}>+</Button>
          </div>
          <div className="row">
          <Button handleClick={this.addDecimal}>.</Button>
          <Button handleClick={this.addZeroToInput}>0</Button>
          <Button handleClick={this.evaluate}>=</Button>
          <Button handleClick={this.subtract}>-</Button>
          </div>
          <div className="row">
          <ClearButton handleClear={this.clearInput}>CLEAR</ClearButton>
          </div>
        </div>
      </div>
    );
  }
}

export default App; 

// handleClick is the event we want to happen when a property is clicked, then we add a function to the property above