import React from 'react';
import { Link, useLocation } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
  
  let location = useLocation();

  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-black-theme sticky-top">
        <div className="container-fluid">
          <Link className="navbar-brand brand-logo" to='/' onClick={handleScrollToTop}>
            <i className="bi bi-building me-2"></i>
            <span>Infinity Web Solution<span className="brand-highlight"></span></span>
          </Link>

          <button
            className="navbar-toggler theme-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              
              <li className="nav-item">
                <Link
                  className={`nav-link theme-nav-link ${location.pathname === '/' ? 'active' : ''}`}
                  to="/"
                  onClick={handleScrollToTop}
                >
                  <i className="bi bi-house-door me-1"></i> Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link theme-nav-link ${location.pathname === '/Aboutus' ? 'active' : ''}`}
                  to="/Aboutus"
                  onClick={handleScrollToTop}
                >
                  <i className="bi bi-info-circle me-1"></i> About Us
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className={`nav-link theme-nav-link ${location.pathname === '/Contactus' ? 'active' : ''}`}
                  to="/Contactus"
                  onClick={handleScrollToTop}
                >
                  <i className="bi bi-envelope me-1"></i> Contact Us
                </Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;