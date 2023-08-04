import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './Login';
import NavBar from './NavBar';
import Sales from './Sales'
import Products from './Products'
import Staff from './Staff'

function Router({handleLogin, handleLogout, loggedInUser, loginError}) {
  return (
    <Routes>
         {/* Route for the Login component */}
      <Route path="/" element={<Login handleLogin={handleLogin} />} />
      
      {/* Route for the NavBar component */}
      <Route path="/navbar" element={<NavBar user={loggedInUser} handleLogout={handleLogout}/>} />

         {/* Route for the Sales component */}
         <Route path="/sales" element={<Sales />} />

            {/* Route for the Products component */}
      <Route path="/products" element={<Products />} />

         {/* Route for the Staff component */}
        <Route path="/staff" element={<Staff  />} />
    </Routes>
  );
}

export default Router;
