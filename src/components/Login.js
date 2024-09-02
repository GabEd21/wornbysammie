import React, { useEffect, useState } from 'react';
import { auth,provider } from './Config';
import {signInWithPopup} from "firebase/auth"
import Home from './Home';

function Login() {
    const [value,setValue] = useState('')
  const handleLogin = (event) => {
    event.preventDefault();
    // Logic for login button (blank for now)
  };

  const handleForgotPassword = () => {
    // Logic for forgot password button (blank for now)
  };

  const handleSignin = () => {
    signInWithPopup(auth, provider)
      .then((data) => {
        setValue(data.user.email);
        localStorage.setItem("email", data.user.email);
      })
      .catch((error) => {
        if (error.code === 'auth/popup-closed-by-user') {
          console.log("The popup was closed before completing the sign-in.");
          // Optionally, you can provide a message to the user here
        } else {
          console.error("Sign-in error:", error);
        }
      });
  };

  useEffect(()=>{
    setValue(localStorage.getItem('email'))
  })

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
      {value?<Home/>:
      <button id="Sign in in Gmail" onClick={handleSignin}>
        Sign in using Gmail Account
      </button>
        }
      </div>
    </div>
  );
}

export default Login;
