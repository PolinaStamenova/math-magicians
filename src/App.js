/* eslint-disable react/prefer-stateless-function, quotes */

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Calculator from "./components/Calculator";
import "./components/Calculator.css";
import Nav from "./Nav";
import Home from "./pages/Home";
import "./App.css";
import Calc from "./pages/Calc";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <div>
            <Nav />
            <Route path="/" exact component={Home} />
            <Route path="/calc" component={Calc} />
            <Calculator />
          </div>
        </Switch>
      </Router>
    );
  }
}

export default App;
