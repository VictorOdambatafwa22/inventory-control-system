
import React, { useState, useEffect } from "react";

import { BrowserRouter } from 'react-router-dom';
import Router from './Router';

import './App.css';
import Staff from "./Staff";

function App() {

  const [formData, setFormData] = useState({
    staffID: '',
    staffName: '',
    gender: '',
    title: '',
    role: '',
    password: '',
  });

  const [staffList, setStaffList] = useState([]);
  const [editStaffId, setEditStaffId] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editStaffId) {
      fetch(`https://inventory-server-mj8r.onrender.com/staff/${editStaffId}`, {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          })
            .then((response) => response.json())
            .then((updatedStaff) => {
              
              const updatedStaffList = staffList.map((staff) =>
                staff.id === editStaffId ? updatedStaff : staff
              );
              setStaffList(updatedStaffList);
              setFormData({
                staffID: '',
                staffName: '',
                gender: '',
                title: '',
                role: '',
                password: '',
              });
              setEditStaffId(null); 
            })
            .catch((error) => {
              console.error('Error:', error);
            });
    } else {
      fetch('https://inventory-server-mj8r.onrender.com/staff', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          })
            .then((response) => response.json())
            .then((newStaff) => {
              setStaffList([...staffList, newStaff]);
              setFormData({
                staffID: '',
                staffName: '',
                gender: '',
                title: '',
                role: '',
                password: '',
              });
            })
            .catch((error) => {
              console.error('Error:', error);
            });
        }
    }
  

  const handleSearch = () => {
    const filteredStaffList = staffList.filter((staff) =>
      staff.staffName.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setStaffList(filteredStaffList);
    setSearchQuery("");
  };

  const handleDelete = (id) => {
    fetch(`https://inventory-server-mj8r.onrender.com/staff/${id}`, {
      method: 'DELETE',
    })
    .then((response) => response.json())
    .then(() => {
      setStaffList(staffList.filter((staff) => staff.id !== id));

    })
.catch ((error) => {
    console.error('Error:', error);
  })
  };

  const handleEdit = (id) => {
    let editedStaff = null;
    staffList.forEach((staff) => {
      if (staff.id === id) {
        editedStaff = staff;
      }
    });
  
    if (editedStaff) {
      setFormData({
        staffID: editedStaff.staffID,
        staffName: editedStaff.staffName,
        gender: editedStaff.gender,
        title: editedStaff.title,
        role: editedStaff.role,
        password: editedStaff.password,
      });
      setEditStaffId(id);
    }
  };
  


  useEffect(() => {
    fetch('https://inventory-server-mj8r.onrender.com/staff')
      .then((response) => response.json())
      .then((staffData) => {
        setStaffList(staffData)
      })
      .catch((error) => {
        console.error('Error:', error);
      })
  }, []);

  return (
    <div className="container">
      <Staff
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        staffList={staffList}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleSearch={handleSearch}
      />


  // State to manage login error, logged-in user, and user role
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

    </div>
  );
}

export default App;
