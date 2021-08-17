/* eslint-disable  quotes */

import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <nav>
        <h1>Math Magicians</h1>
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/calc">
            <li>Calculator</li>
          </Link>
          <Link to="/quote">
            <li>Quote</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}
