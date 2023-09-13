import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import "../../App.css";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-warning mb-4">
      <div className="container">
        <Link to="/" className="fs-3 text-center navbar-brand">Rick & Morty</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation" onClick={toggleMenu}>
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
        <div className={`collapse navbar-collapse justify-content-end ${menuOpen ? 'show' : ''}`} id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink to="/" className="nav-link" >Characters</NavLink>
            <NavLink to="/episodes" className="nav-link" >Episodes</NavLink>
            <NavLink to="location" className="nav-link" >Location</NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
