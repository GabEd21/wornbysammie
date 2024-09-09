import React, { useEffect, useState } from 'react';
import { auth,provider } from './Config';
import {signInWithPopup} from "firebase/auth"
import { useNavigate } from 'react-router-dom';

function Login() {
    const [value,setValue] = useState('');
    const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    // Logic for login button (blank for now)
  };


  const handleSignin = () => {
    signInWithPopup(auth, provider)
      .then((data) => {
        setValue(data.user.email);
        localStorage.setItem("email", data.user.email);
        navigate('/');
      })
      .catch((error) => {
        if (error.code === 'auth/popup-closed-by-user') {
          console.log("The popup was closed before completing the sign-in.");
        } else {
          console.error("Sign-in error:", error);
        }
      });
  };

  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if(user){
        navigate('/');
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form id="loginForm" onSubmit={handleLogin}>
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit" id="loginButton">Login</button>
      </form>
      <div>
        <h1>   </h1>
      </div>
      <div>
      <button id="Sign in in Gmail" onClick={handleSignin}>
        Sign in using Gmail Account
      </button>
      </div>
    </div>
  );
}

export default Login;
