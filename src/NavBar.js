import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const NavBar = ({ user, handleLogout }) => {
  //const navigate = useNavigate();

  // Function to handle logout button click
  const handleLogoutClick = () => {
    // Clear user info and perform logout logic
    handleLogout();
    //Navigate back to login page
    //navigate('/');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        {/* <Link className="navbar-brand ml-0" to="/navbar">
          KISCEN ENT.
        </Link> */}
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mx-auto justify-content-center">
            {user ? (
              <>
                <li className="nav-item mr-3"> 
                  <p className="nav-link mb-0">Welcome, {user}!</p>
                </li>
                <li className="nav-item mr-3"> 
                  <Link className="nav-link" to="/products">
                    PRODUCTS
                  </Link>
                </li>
                <li className="nav-item mr-3"> 
                  <Link className="nav-link" to="/sales">
                    SALES
                  </Link>
                </li>
                <li className="nav-item mr-3"> 
                  <Link className="nav-link" to="/staff">
                    STAFF
                  </Link>
                </li>
                <li className="nav-item mr-3"> 
                  <Link className="nav-link" to="/reports">
                    REPORTS
                  </Link>
                </li>
                <li className="nav-item">
                  <button className="nav-link btn btn-link" onClick={handleLogoutClick}>
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
