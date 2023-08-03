import React, { useState, useEffect } from "react";
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

    </div>
  );
}

export default App;
