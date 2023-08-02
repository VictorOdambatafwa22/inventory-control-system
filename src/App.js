import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './Router';
import './App.css';
import Staff from './Staff';

function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
  const [loginError, setLoginError] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [userRole, setUserRole] = useState(null);

  // Function to handle user login
  const handleLogin = (staffId, password, navigate) => { 

    console.log(staffId, password)

    // Fetch data from the server
    fetch('https://inventory-server-mj8r.onrender.com/staff')
      .then((res) => res.json())
      .then((data) => {

        console.log(data)

        // Find a matching user based on staffId and password
        const matchedUser = data.find((data) => [data.staffID === staffId && data.password === password] , data.role);

        console.log(matchedUser)

        if (matchedUser) {
          // If login is successful, update states
          setLoginError(null);
          setLoggedInUser(matchedUser.staffName);
          setUserRole(matchedUser.role);
          // Navigate to NavBar component upon successful login
          navigate('/navbar'); 
        } 
        else {
          // If login fails, show error message
         setLoggedInUser(null);
         setUserRole(null);
         setLoginError('Invalid credentials. Please check your staff ID and password.');
       }
     })
     console.log(userRole)
 };

 // Function to handle user logout
 const handleLogout = () => {
   setLoggedInUser(null);
   setUserRole(null);
 };

  return (
    <div className="App">
      <BrowserRouter>
        <Router handleLogin={handleLogin} handleLogout={handleLogout} loggedInUser={loggedInUser} loginError={loginError}/>
      </BrowserRouter>
      <Staff />
    </div>
  )
  
}

export default App;
