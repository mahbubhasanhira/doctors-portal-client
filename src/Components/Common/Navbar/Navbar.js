import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {

  const [currentState, setCurrentState] = useState('');
  useEffect(()=>{
      setCurrentState(window.location.pathname);
  },[useParams()]);

  let customClassName = 'nav-link text-dark';

  if(currentState === '/'){
      customClassName="nav-link home_nav"
      }

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <button
        className="navbar-toggler ml-auto"
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
            <Link to='/' className="nav-link text-dark" href="#">
              Home
            </Link>
          </li>
          <li className="nav-item mr-5">
            <Link to='/dashboard/dashboard' className="nav-link text-dark" href="#">
              Dashboard
            </Link>
          </li>
          <li className="nav-item mr-5">
            <Link to='/dashboard/addDoctor' className="nav-link text-dark" href="#">
              Doctors
            </Link>
          </li>
          <li className="nav-item mr-5">
            <Link to='/dashboard/dashboard' className={customClassName} href="#">
              Admin
            </Link>
          </li>
          <li className="nav-item mr-5">
            <Link to='#' className={customClassName} href="#">
              Blogs
            </Link>
          </li>
          <li className="nav-item mr-5">
            <Link to='#' className={customClassName} href="#">
              Contact us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
