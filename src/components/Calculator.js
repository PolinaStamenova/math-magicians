/* eslint-disable quotes */

import React, { useState } from "react";
import "./Calculator.css";
import calculate from "../logic/calculator";

function Calculator() {
  const [state, setState] = useState({});

  const handleClick = (e) => {
    setState({ ...state, ...calculate(state, e.target.name) });
  };

  const { total, next, operation } = state;
  const display = (total || "") + (operation || "") + (next || "");

  return (
    <div className="calculator">
      <p className="calculator-result">{display || "0"}</p>
      <div className="calculator-buttons">
        <button name="AC" type="button" onClick={handleClick} className="grey">
          AC
        </button>
        <button name="+/-" type="button" onClick={handleClick} className="grey">
          +/-
        </button>
        <button name="" type="button" onClick={handleClick} className="grey">
          %
        </button>
        <button name="÷" type="button" onClick={handleClick} className="orange">
          ÷
        </button>
        <button name="7" type="button" onClick={handleClick} className="grey">
          7
        </button>
        <button name="8" type="button" onClick={handleClick} className="grey">
          8
        </button>
        <button name="9" type="button" onClick={handleClick} className="grey">
          9
        </button>
        <button name="x" type="button" onClick={handleClick} className="orange">
          x
        </button>
        <button name="4" type="button" onClick={handleClick} className="grey">
          4
        </button>
        <button name="5" type="button" onClick={handleClick} className="grey">
          5
        </button>
        <button name="6" type="button" onClick={handleClick} className="grey">
          6
        </button>
        <button name="-" type="button" onClick={handleClick} className="orange">
          -
        </button>
        <button name="1" type="button" onClick={handleClick} className="grey">
          1
        </button>
        <button name="2" type="button" onClick={handleClick} className="grey">
          2
        </button>
        <button name="3" type="button" onClick={handleClick} className="grey">
          3
        </button>
        <button name="+" type="button" onClick={handleClick} className="orange">
          +
        </button>
        <button
          name="0"
          type="button"
          onClick={handleClick}
          className="grey, zero"
        >
          0
        </button>
        <button name="." type="button" onClick={handleClick} className="grey">
          .
        </button>
        <button name="=" type="button" onClick={handleClick} className="orange">
          =
        </button>
      </div>
    </div>
  );
}

export default Calculator;
