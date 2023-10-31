import React, { useState } from 'react'
import { initializeApp } from 'firebase/app'
import { firebaseConfig } from './FirebaseConfig'
import { useNavigate, Link } from "react-router-dom";

import { getAuth, signInWithEmailAndPassword ,createUserWithEmailAndPassword} from 'firebase/auth';
const Login = ({ page }) => {


  const app = initializeApp(firebaseConfig);
  const navigate = useNavigate();
  // console.log(app);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = getAuth();
  const [isUserExist, setUserExist] = useState(false);
  const [isEmailUsed, setIsEmailUsed] = useState(false);
  // console.log("getAuth : ",auth);
  const onSignInClickHandler = (e) => {
    e.preventDefault();
    if(page){
      // console.log("Sign In :" , signInWithEmailAndPassword);
      signInWithEmailAndPassword(auth, email, password)
        .then(auth => {
          if (auth)
            navigate('/dashboard')
        })
        .catch(err => {
          setUserExist(true);
          // alert(err.message);
        })
      // navigate('/dashboard')
    }
    else{
        createUserWithEmailAndPassword(auth, email, password)
        .then(auth => {
          if(auth) {
            navigate('/dashboard');
          }
        })
        .catch(err => {
          setIsEmailUsed(true);
          // console.log(err);
        })
    }
  }

  const emailOnChangeHandler = (e) => {
    setEmail(e.target.value);

  }


  const passwordOnChangeHandler = (e) => {
    setPassword(e.target.value);
  }

  return (
    <div className="login">
      <div className="holder">
        <h1 className="text-white">{page ? <span>Sign In</span> : <span>Register</span>}</h1>
        <br />
        <form>
          <input
            className="form-control"
            value={email}
            type="email"
            onChange={emailOnChangeHandler}
            placeholder="Email or Phone number" />
          <input
            className="form-control"
            value={password}
            onChange={passwordOnChangeHandler}
            type="password"
            placeholder="Password" />
          <button className="btn btn-danger form-control" onClick={onSignInClickHandler}>
            {page ? <span>Sign In</span> : <span>Register</span>}
          </button>
          {/* <br /> */}

          <br />
          {
            page &&
            <>
              <br />
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label className="form-check-label text-white" htmlFor="flexCheckDefault">
                  Remember Me
                </label>
              </div>
            </>
          }
        </form>
        {/* <br /> */}
        {/* <br /> */}
        {isUserExist && <p className="text-danger">User does not exist | Go for Signup</p>}
        {isEmailUsed && <p className="text-danger">Email already in use | Go for Sign In</p>}
        <div className="login-form-other">
          <div className="login-signup-now">
            {page ? <span>New to Netflix</span> : <span >Existing User </span>}
            &nbsp;
            <Link className='' href='/login' target='_self' to={page ? '/register' : '/login'}>
              {page ? <span>Sign Up now</span> : <span className='signin'>Sign In</span>}</Link>
          </div>
        </div>
      </div>
      <div className="shadow"></div>
      <img className="concord-img vlv-creative" src="https://assets.nflxext.com/ffe/siteui/vlv3/6e32b96a-d4be-4e44-a19b-1bd2d2279b51/ee068656-14b9-4821-89b4-53b4937d9f1c/IN-en-20220516-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="" />
    </div>
  )
}

export default Login