import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { UserContext } from '../../../App';
import jwt_decode from "jwt-decode";

const PrivateRoute = ({ children, ...rest }) => {

    const {loggedInUser, setLoggedInUser} = useContext(UserContext);
  
    const isLoggedIn = () => {
        const token = sessionStorage.getItem('token');
        if(!token){
          return false;
        }
        const decodedToken = jwt_decode(token);
        // get current time
        const currentTime = new Date().getTime() / 1000;
        // compare the expiration time with the current time
        // will return false if expired and will return true if not expired
        if(decodedToken.exp < currentTime){
          setLoggedInUser({});
          sessionStorage.removeItem('token');
          sessionStorage.removeItem('userInfo');
        }
        return decodedToken.exp > currentTime;
      }
      isLoggedIn();

    return (
      <Route
      {...rest}
      render={({ location }) =>
        (loggedInUser.isSignIn || isLoggedIn()) ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default PrivateRoute;