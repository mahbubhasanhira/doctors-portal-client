import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../../firebase.config';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../../App';
import loginPic from '../../../doctor-portal-resource/images/login.png';
import './Login.css';
import logo from '../../../doctor-portal-resource/images/flouride.png';
import { useForm } from "react-hook-form";

firebase.initializeApp(firebaseConfig);

const Login = () => {
    const {loggedInUser, setLoggedInUser} = useContext(UserContext);

    const history = useHistory();
    const location = useLocation();
  
    const { from } = location.state || { from: { pathname: "/dashboard/appointment" } };

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
            };
            setLoggedInUser(signedInUser);
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

const handleSignOut = () => {
    setLoggedInUser({});
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('userInfo');
}

const { register, handleSubmit } = useForm();
const onSubmit = data => {
    firebase.auth().signInWithEmailAndPassword(data.email, data.password)
    .then(result => {
        const {displayName, email, photoURL} = result.user;
        const signedInUser = {
            isSignIn: true,
            name: displayName,
            email: email,
            photo: photoURL,
            success: true,
        };
        setLoggedInUser(signedInUser);
            sessionStorage.setItem(`userInfo`, JSON.stringify(signedInUser));
            storeAuthToken();
            history.replace(from);
    })
    .catch((error) => console.log(error));
}

    return (
        <section>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-6">
                        <div className='mt-4 d-flex justify-content-between'>
                            <div className='w-25 mr-4'>
                                <Link to='/'><img className='' src={logo} alt="logo"/></Link>
                            </div>
                            <div className='p-2' style={{width:'350px',borderRadius:'5px', border:'1px solid lightgray', backgroundColor:'#ff312627'}}>
                                <p className='mt-0 mb-0'><strong>Note That: </strong>If you want check Doctor Panel? <br/> Then you must use.<br/></p>
                                <p ><strong>email:</strong><span> admin@gmail.com</span><br/><strong>Password:</strong><span> @admin123</span></p>
                            </div>
                        </div>
                        <div className=' d-flex align-items-center'>
                            <div className='text-center login_container pb-0'>
                                <h3>{loggedInUser.email ? 'Log Out' : 'Login'}</h3>
                                {
                                    loggedInUser.email ? 
                                    <div className='mt-5 pt-5'>
                                        <button onClick={handleSignOut} className='btn btn-brand w-100'> Sign Out</button>
                                    </div>
                                    :
                                    <div className='inputContainer mt-5'>
                                        <form onSubmit={handleSubmit(onSubmit)}>
                                            <label for="userName">User Name</label>
                                            <div className="input-group input-group-sm mb-3">
                                                <input type="text" name='email' defaultValue='admin@gmail.com' className="form-control" ref={register({ required: true })}/>
                                            </div>

                                            <label for="password">Password</label>
                                            <div className="input-group input-group-sm">
                                                <input type="password" name='password' defaultValue='@admin123' className="form-control" ref={register({ required: true })}/>
                                            </div>
                                            <button type='submit' className='signInBtn btn btn-brand w-100 mt-3'> Sign in</button>
                                        </form>
                                        <hr/>
                                    </div>
                                }
                                {
                                   !loggedInUser.email && <button onClick={handleGoogleSignIn} className='signInBtn btn btn-brand w-100 '>Sign in with Google</button>
                                }
                            </div>
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