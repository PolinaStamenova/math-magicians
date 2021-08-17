/* eslint-disable react/prefer-stateless-function, quotes */

import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-holder">
      <h2>This is the HOME page</h2>
      <p className="home-subtitle">
        Note: Behind the scenes a renders anwith a real href, so people using
        the keyboard for navigation or screen readers will still be able to use
        this app.
      </p>
      <p className="home-third-title">
        Note: Behind the scenes a renders anwith a real href, so people using
        the keyboard for navigation or screen readers will still be able to use
        this app.
      </p>
    </div>
  );
}
