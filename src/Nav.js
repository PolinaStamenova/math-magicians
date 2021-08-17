import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

export default function Nav() {
  return (
    <div>
      <nav>
        <h1 className="title">Math Magicians</h1>
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/calculator">
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
