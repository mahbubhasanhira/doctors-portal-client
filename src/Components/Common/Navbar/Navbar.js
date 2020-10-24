import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light text-white">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item mr-5">
            <a className="nav-link text-dark" href="#">
              Home
            </a>
          </li>
          <li className="nav-item mr-5">
            <a className="nav-link text-dark" href="#">
              About
            </a>
          </li>
          <li className="nav-item mr-5">
            <a className="nav-link text-dark" href="#">
              Dental Services
            </a>
          </li>
          <li className="nav-item mr-5">
            <a className="nav-link text-white" href="#">
              Reviews
            </a>
          </li>
          <li className="nav-item mr-5">
            <a className="nav-link text-white" href="#">
              Blogs
            </a>
          </li>
          <li className="nav-item mr-5">
            <a className="nav-link text-white" href="#">
              Contact us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
