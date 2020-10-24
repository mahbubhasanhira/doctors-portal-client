import React, { useContext, useState } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../../firebase.config';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../../App';
import loginPic from '../../../doctor-portal-resource/images/login.png';
import './Login.css';

firebase.initializeApp(firebaseConfig);

const Login = () => {
    
    const [user, setUser] = useState({
        isSignIn:false,
        name:'',
        email:'',
        password:'',
        photoURL:'',
        error:'',
        success: false,
    });

    const history = useHistory();
    const location = useLocation();
  
    const { from } = location.state || { from: { pathname: "/" } };

    const handleGoogleSignIn = () =>{
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(googleProvider)
        .then(result => {
            const {displayName, email, photoURL} = result.user;
            const signedInUser = {
                isSignIn: true,
                name: displayName,
                email: email,
                photo: photoURL,
                success: true,
            }
            setUser(signedInUser);
            sessionStorage.setItem(`userInfo`, JSON.stringify(signedInUser));
            storeAuthToken();
            history.replace(from);
          })
          .catch(error => alert(error.message));
    }

    const storeAuthToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
        .then(idToken => {
           sessionStorage.setItem('token', idToken);
          }).catch(error => {
            // Handle error
          });
    }


    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 d-flex align-items-center">
                        <div className='text-center login_container'>
                            <h3 className=''>Login</h3>
                            <div className='inputContainer mt-5'>
                                <form action="">
                                    <label for="userName">User Name</label>
                                    <div class="input-group input-group-sm mb-3">
                                        <input type="text" name='userName' class="form-control" id='userName' aria-label="Small"/>
                                    </div>

                                    <label for="password">Password</label>
                                    <div className="input-group input-group-sm">
                                        <input type="text" name='Password' class="form-control" id='password' aria-label="Small"/>
                                    </div>
                                    <p>Forgot Your Password?</p>
                                </form>
                            </div>
                            <button onClick={handleGoogleSignIn} className='signInBtn btn btn-brand w-100'>Sign in</button>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img src={loginPic} alt="" className="img-fluid"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;