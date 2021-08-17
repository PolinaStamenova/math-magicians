import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

export default function Nav() {
  const navStyle = {
    color: 'blue',
  };
  return (
    <div>
      <nav>
        <h1 className="title">Math Magicians</h1>
        <ul>
          <Link to="/">
            <li style={navStyle}>Home</li>
          </Link>
          <Link to="/calculator">
            <li className="middle" style={navStyle}>
              Calculator
            </li>
          </Link>
          <Link to="/quote">
            <li style={navStyle}>Quote</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}
