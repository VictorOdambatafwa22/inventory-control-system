import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './Login';
import NavBar from './NavBar';

function Router({handleLogin, handleLogout, loggedInUser, loginError}) {
  return (
    <Routes>
         {/* Route for the Login component */}
      <Route path="/" element={<Login handleLogin={handleLogin} />} />
      
      {/* Route for the NavBar component */}
      <Route path="/navbar" element={<NavBar user={loggedInUser} handleLogout={handleLogout}/>} />
    </Routes>
  );
}

export default Router;
