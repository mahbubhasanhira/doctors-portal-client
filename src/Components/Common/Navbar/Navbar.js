import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './Navbar.css';
import logo from '../../../doctor-portal-resource/images/flouride.png';
import { UserContext } from '../../../App';

const Navbar = () => {
  const {loggedInUser, setLoggedInUser} = useContext(UserContext);
  const [currentState, setCurrentState] = useState('');
  useEffect(()=>{
      setCurrentState(window.location.pathname);
  },[useParams()]);

  let customClassName = 'nav-link text-dark';

  if(currentState === '/'){
      customClassName="nav-link home_nav"
      }

const handleSignOut = () => {
  setLoggedInUser({});
  sessionStorage.removeItem('token');
  sessionStorage.removeItem('userInfo');
}
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <Link to='/'><img className='nav_img' src={logo} alt='logo'/></Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
        {
             loggedInUser.name &&
            <li className="nav-item mr-5">
              <span className={'nav-link text-dark' }>{loggedInUser.name}</span>
            </li>
          }
          <li className="nav-item mr-5">
            <Link to='/' className="nav-link text-dark">
              Home
            </Link>
          </li>
          <li className="nav-item mr-5">
            <Link to='/appointment' className="nav-link text-dark">
              Get Appointment
            </Link>
          </li>
          <li className="nav-item mr-5">
            <Link to='/dashboard/appointment' className={customClassName}>
              My Appointment
            </Link>
          </li>
          <li className="nav-item mr-5">
            <Link to='#' className={customClassName}>
              Blog
            </Link>
          </li>
          <li className="nav-item mr-5">
            {
              loggedInUser.email 
              ?
                <button onClick={handleSignOut} className={customClassName + ' logOut_btn'}>Log Out</button>
              :
              <Link to='/login' className={customClassName + ' logOut_btn pb-2'}>
              Login
            </Link>
            }
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
