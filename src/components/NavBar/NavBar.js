import React from 'react'
import {NavLink, Link} from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">
     <Link to="/" className="fs-3 text-center navbar-brand">Rick & Morty</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <style jsx>
      {`
      button[aria-expanded="false" ] > .close {
        display: none;
      }
      button[aria-expanded="true" ] > .open {
        display: none;
      }
      `}

    </style>
    <i class="fa-solid fa-ellipsis-vertical fw-bold open"></i>
    <i class="fa-solid fa-bars fw-bold close"></i>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <NavLink  to="/" className="nav-link active" >Characters</NavLink>
        <NavLink to="/episodes" className="nav-link" >Episodes</NavLink>
        <NavLink to="location" className="nav-link" >Location</NavLink>
      </div>
    </div>
  </div>
</nav>
  )
}

export default NavBar
