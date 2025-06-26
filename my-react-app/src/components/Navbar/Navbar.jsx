import React, { useState } from 'react';
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-blue">
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
            <a className="nav-link" href="#">Domov </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Kontakt</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
