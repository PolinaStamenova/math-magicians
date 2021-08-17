/* eslint-disable react/prefer-stateless-function, quotes */

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./components/Calculator.css";
import "./App.css";
import Nav from "./Nav";
import Home from "./pages/Home";
import Calc from "./pages/Calc";
import Quote from "./pages/Quote";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <div>
            <Nav />
            <Route path="/" exact component={Home} />
            <Route path="/calculator" component={Calc} />
            <Route path="/quote" component={Quote} />
          </div>
        </Switch>
      </Router>
    );
  }
}

export default App;
