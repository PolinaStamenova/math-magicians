import React from 'react';
import './Calculator.css';
import calculate from '../logic/calculator';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (buttonName) => {
    this.setState((state) => calculate(state, buttonName));
  };

  displayResult = () => {
    const { total, next, operation } = this.state;
    const display = (total || '') + (operation || '') + (next || '');

    return display || '0';
  };

  render() {
    return (
      <div className="calculator">
        <p className="calculator-result">{this.displayResult()}</p>
        <div className="calculator-buttons">
          <button
            name="AC"
            type="button"
            onClick={(e) => this.handleClick(e.target.name)}
            className="grey"
          >
            AC
          </button>
          <button
            name="+/-"
            type="button"
            onClick={(e) => this.handleClick(e.target.name)}
            className="grey"
          >
            +/-
          </button>
          <button
            name=""
            type="button"
            onClick={(e) => this.handleClick(e.target.name)}
            className="grey"
          >
            %
          </button>
          <button
            name="÷"
            type="button"
            onClick={(e) => this.handleClick(e.target.name)}
            className="orange"
          >
            ÷
          </button>
          <button
            name="7"
            type="button"
            onClick={(e) => this.handleClick(e.target.name)}
            className="grey"
          >
            7
          </button>
          <button
            name="8"
            type="button"
            onClick={(e) => this.handleClick(e.target.name)}
            className="grey"
          >
            8
          </button>
          <button
            name="9"
            type="button"
            onClick={(e) => this.handleClick(e.target.name)}
            className="grey"
          >
            9
          </button>
          <button
            name="x"
            type="button"
            onClick={(e) => this.handleClick(e.target.name)}
            className="orange"
          >
            x
          </button>
          <button
            name="4"
            type="button"
            onClick={(e) => this.handleClick(e.target.name)}
            className="grey"
          >
            4
          </button>
          <button
            name="5"
            type="button"
            onClick={(e) => this.handleClick(e.target.name)}
            className="grey"
          >
            5
          </button>
          <button
            name="6"
            type="button"
            onClick={(e) => this.handleClick(e.target.name)}
            className="grey"
          >
            6
          </button>
          <button
            name="-"
            type="button"
            onClick={(e) => this.handleClick(e.target.name)}
            className="orange"
          >
            -
          </button>
          <button
            name="1"
            type="button"
            onClick={(e) => this.handleClick(e.target.name)}
            className="grey"
          >
            1
          </button>
          <button
            name="2"
            type="button"
            onClick={(e) => this.handleClick(e.target.name)}
            className="grey"
          >
            2
          </button>
          <button
            name="3"
            type="button"
            onClick={(e) => this.handleClick(e.target.name)}
            className="grey"
          >
            3
          </button>
          <button
            name="+"
            type="button"
            onClick={(e) => this.handleClick(e.target.name)}
            className="orange"
          >
            +
          </button>
          <button
            name="0"
            type="button"
            onClick={(e) => this.handleClick(e.target.name)}
            className="grey, zero"
          >
            0
          </button>
          <button
            name="."
            type="button"
            onClick={(e) => this.handleClick(e.target.name)}
            className="grey"
          >
            .
          </button>
          <button
            name="="
            type="button"
            onClick={(e) => this.handleClick(e.target.name)}
            className="orange"
          >
            =
          </button>
        </div>
      </div>
    );
  }
}

export default Calculator;
