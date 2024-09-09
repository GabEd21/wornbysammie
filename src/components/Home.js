import React from 'react';
import { auth } from './Config';
import { signOut } from 'firebase/auth';
import 'bootswatch/dist/cerulean/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        localStorage.removeItem("email");
        navigate('/');
      })
      .catch((error) => {
        console.error("Sign-out error:", error);
      });
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-primary fixed-top" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#">Home
                  <span className="visually-hidden">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Pricing</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
            </ul>
            <form className="d-flex align-items-center">
              <input className="form-control me-2" type="search" placeholder="Search" />
              <button className="btn btn-secondary me-2" type="submit">Search</button>
              <button className="btn btn-danger" onClick={handleSignOut}>Sign out</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Home;
