import React from 'react';
import { Link } from 'react-router-dom';
import { faHome, faBriefcase, faFilm, faGlobe, faHeart, faFlask, faFutbol, faMicrochip } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./Navbar.css"
import './homep.js'

const NavItem = ({ to, icon, label }) => (
  <li className="nav-item">
    <Link className="nav-link" to={to}>
      <FontAwesomeIcon icon={icon} className="nav-icon" />
      {label}
    </Link>
  </li>
);

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      {/* Brand logo and toggle button */}
      <div className="navbar-brand" >
        <FontAwesomeIcon icon={faMicrochip} className="nav-icon" />
        Alert-News
      </div>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Navigation links */}
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <NavItem to="/homep" icon={faHome} label="Home" />
          <NavItem to="/business" icon={faBriefcase} label="Business" />
          <NavItem to="/entertainment" icon={faFilm} label="Entertainment" />
          <NavItem to="/general" icon={faGlobe} label="General" />
          <NavItem to="/health" icon={faHeart} label="Health" />
          <NavItem to="/science" icon={faFlask} label="Science" />
          <NavItem to="/sports" icon={faFutbol} label="Sports" />
          <NavItem to="/technology" icon={faMicrochip} label="Technology" />
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
