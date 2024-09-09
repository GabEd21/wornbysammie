import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import { useEffect, useState } from 'react';
import { auth } from './components/Config';
function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={user ? <Home /> : <Login />} />
          <Route path='/login' element={user ? <Navigate to="/" /> : <Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
