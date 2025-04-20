import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          My Books
        </Link>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/" className="navbar-link">
              Home
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/reading" className="navbar-link">
              Reading
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/owned" className="navbar-link">
              Owned
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;