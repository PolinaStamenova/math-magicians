import React from 'react';
import './Calculator.css';

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
          <button type="button" className="grey">
            AC
          </button>
          <button type="button" className="grey">
            +/-
          </button>
          <button type="button" className="grey">
            %
          </button>
          <button type="button" className="orange">
            /
          </button>
          <button type="button" className="grey">
            7
          </button>
          <button type="button" className="grey">
            8
          </button>
          <button type="button" className="grey">
            9
          </button>
          <button type="button" className="orange">
            x
          </button>
          <button type="button" className="grey">
            4
          </button>
          <button type="button" className="grey">
            5
          </button>
          <button type="button" className="grey">
            6
          </button>
          <button type="button" className="orange">
            -
          </button>
          <button type="button" className="grey">
            1
          </button>
          <button type="button" className="grey">
            2
          </button>
          <button type="button" className="grey">
            3
          </button>
          <button type="button" className="orange">
            +
          </button>
          <button type="button" className="grey, zero">
            0
          </button>
          <button type="button" className="grey">
            .
          </button>
          <button type="button" className="orange">
            =
          </button>
        </div>
      </div>
    );
  }
}

export default Calculator;
