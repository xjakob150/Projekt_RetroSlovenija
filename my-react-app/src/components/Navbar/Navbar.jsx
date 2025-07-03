import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const toggleNavbar = () => setIsOpen(!isOpen);

  useEffect(() => {
    const token = sessionStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    if (window.confirm("si prepričan?")) {
      sessionStorage.removeItem('token');
      setIsLoggedIn(false);
      navigate('/');
    }
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
          <li className="nav-item">
            <Link className="nav-link" to="/">Domov</Link>
          </li>
          <li className="nav-item">
            {isLoggedIn ? (
              <div className='d-flex flex-column flex-sm-row align-items-start'>
                <button className="nav-link btn btn-link" onClick={handleLogout}>
                  Odjava
                </button>
                <Link to="/UserPage" className="nav-link btn btn-link">
                  Moj profil
                </Link>
              </div>
            ) : (
              <Link className="nav-link" to="/LoginPage">Vpis</Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
