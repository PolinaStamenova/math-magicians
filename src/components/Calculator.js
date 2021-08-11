import React from "react";
import "./Calculator.css";

class Calculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      result: 0,
    };
  }

  render() {
    const { result } = this.state;
    return (
      <div className="calculator">
        <p className="calculator-result">{result}</p>
        <div className="calculator-buttons">
          <button name="AC" type="button" className="grey">
            AC
          </button>
          <button name="+/-" type="button" className="grey">
            +/-
          </button>
          <button name="" type="button" className="grey">
            %
          </button>
          <button name="/" type="button" className="orange">
            /
          </button>
          <button name="7" type="button" className="grey">
            7
          </button>
          <button name="8" type="button" className="grey">
            8
          </button>
          <button name="9" type="button" className="grey">
            9
          </button>
          <button name="x" type="button" className="orange">
            x
          </button>
          <button name="4" type="button" className="grey">
            4
          </button>
          <button name="5" type="button" className="grey">
            5
          </button>
          <button name="6" type="button" className="grey">
            6
          </button>
          <button name="-" type="button" className="orange">
            -
          </button>
          <button name="1" type="button" className="grey">
            1
          </button>
          <button name="2" type="button" className="grey">
            2
          </button>
          <button name="3" type="button" className="grey">
            3
          </button>
          <button name="+" type="button" className="orange">
            +
          </button>
          <button name="0" type="button" className="grey, zero">
            0
          </button>
          <button name="." type="button" className="grey">
            .
          </button>
          <button name="=" type="button" className="orange">
            =
          </button>
        </div>
      </div>
    );
  }
}

export default Calculator;
