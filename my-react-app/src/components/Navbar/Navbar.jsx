import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light z-3 sticky-top">
      <a className="navbar-brand" href="#">RetroSlovenija</a>

      <button
        className="navbar-toggler"
        type="button"
        aria-controls="navbarNav"
        aria-expanded={isOpen}
        aria-label="Toggle navigation"
        onClick={toggleNavbar}
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className={`collapse navbar-collapse${isOpen ? ' show' : ''}`} id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">Domov </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/LoginPage">Vpis</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
