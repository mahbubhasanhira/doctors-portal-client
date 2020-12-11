import React, { useContext} from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import { faCalendarAlt, faCog, faHome, faSignOutAlt, faTh, faUserFriends, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Sidebar.css';

const Sidebar = () => {
const { isDoctor, setLoggedInUser} = useContext(UserContext);

const handleSignOut = () => {
    setLoggedInUser({});
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('userInfo');
}
    let path = '/'
    if(typeof(window.location !== undefined)){
        path = window.location.pathname;
    }

    return (
        <div>
            <div>
                <div className='list_container'>
                    <ul>
                        <li className='dashboard_list'>
                            <Link className="dashboard_link" to='/'><FontAwesomeIcon icon={faHome}/>  Home</Link>
                        </li>
                        <li className='dashboard_list '>
                            <Link className={path === '/dashboard/appointment' || path === '/dashboard/appointment/' 
                            ? 'active_link dashboard_link': 'dashboard_link'}
                            to='/dashboard/appointment'><FontAwesomeIcon icon={faCalendarAlt}/> Appointment</Link>
                        </li>
                    
                        {
                            isDoctor &&
                                <>                          
                                    <li className='dashboard_list'>
                                        <Link  className={path === '/dashboard/dashboard' || path === '/dashboard/dashboard/' 
                                            ? 'active_link dashboard_link': 'dashboard_link'}
                                        to='/dashboard/dashboard'><FontAwesomeIcon icon={faTh}/> Dashboard</Link>
                                    </li>
                                    <li className='dashboard_list'>
                                        <Link className={path === '/dashboard/patients' || path === '/dashboard/patients/' 
                                            ? 'active_link dashboard_link': 'dashboard_link'}
                                        to='/dashboard/patients'><FontAwesomeIcon icon={faUserFriends}/> Patients</Link>
                                    </li>
                                    <li className='dashboard_list'>
                                        <Link className={path === '/dashboard/addDoctor' || path === '/dashboard/addDoctor/' 
                                            ? 'active_link dashboard_link': 'dashboard_link'}
                                        to='/dashboard/addDoctor'><FontAwesomeIcon icon={faUserPlus}/> Add Doctors</Link>
                                    </li>
                                    <li className='dashboard_list'>
                                        <Link className={path === '/dashboard/setting' || path === '/dashboard/setting/' 
                                            ? 'active_link dashboard_link': 'dashboard_link'}
                                        to='/dashboard/setting'><FontAwesomeIcon icon={faCog}/> Setting</Link>
                                    </li>
                                </>
                                
                        }
                    </ul> 
                </div>
                <div className="log_out dashboard_list">
                    <Link onClick={handleSignOut}  className='dashboard_link'><FontAwesomeIcon icon={faSignOutAlt}/> Log Out</Link>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;