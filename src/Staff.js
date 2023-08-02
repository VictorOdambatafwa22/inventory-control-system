import React, { useState, useEffect } from "react";

function Staff() {

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
      const [isFormVisible, setIsFormVisible] = useState(false);

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };

      const handleToggleForm = () => {
        setIsFormVisible(!isFormVisible);
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
      };
             
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
}

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
    .catch ((error) => {
      console.error('Error:', error);
    })
  }, []);

    return (
        <div className="container">
          <div className="d-flex">
          <div className="flex-fill">
        <div className="row">
        <div className="col-md-12 d-flex justify-content-center align-items-center">
        
        <form onSubmit={handleSubmit}>
            <h1>Add New Staff</h1> <br />
        <div className="mb-3">
            <label htmlFor="staffID">Staff ID</label><br/>
            <input type="text" id="taffID" name="staffID" value={formData.staffID} onChange={handleChange}/><br/>
        </div>
        <div className="mb-3">
            <label htmlFor="staffName">Staff Name</label><br/>
            <input type="text" id="staffName" name="staffName" value={formData.staffName} onChange={handleChange}/><br/>
        </div>
        <div className="mb-3">
            <label htmlFor="gender">Gender</label><br/>
            <input type="text" id="gender" name="gender" value={formData.gender} onChange={handleChange}/><br/>
        </div>
        <div className="mb-3"> 
            <label htmlFor="title">Title</label><br/>
            <input type="text" id="title" name="title" value={formData.title} onChange={handleChange}/><br/>
        </div>   
        <div className="mb-3">
            <label htmlFor="role">Role</label><br/>
            <input type="text" id="role" name="role" value={formData.role} onChange={handleChange}/><br/>
        </div>
        <div className="mb-3">
            <label htmlFor="password">Password</label><br/>
            <input type="password" id="password" name="password" value={formData.password} onChange={handleChange}/><br/>
        </div>
        <button type="submit" className="btn btn-primary">Add New Staff</button>
        </form>
        </div>
        </div>
        </div>
        
        <br />

        <div className="row">
        <div className="col-md-12 d-flex justify-content-center align-items-center">
        <div className="flex-fill ml-5">
          <div class="mx-5 p-2">
        <h1>Staff Members</h1><br />
        <input
          type="text"
          placeholder="Enter staff name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
        </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12 d-flex justify-content-center align-items-center">
        <div className="table-responsive">
        <table className="table table-hover table-bordered mt-5 mx-auto" style={{ maxWidth: "100%" }}>
        <thead>
          <tr>
            <th>Staff ID</th>
            <th>Staff Name</th>
            <th>Gender</th>
            <th>Title</th>
            <th>Role</th>
            <th>Edit Staff</th>
            <th>Remove Staff</th>
          </tr>
        </thead>
        <tbody>
          {staffList.map((staff) => (
            <tr key={staff.id}>
              <td>{staff.staffID}</td>
              <td>{staff.staffName}</td>
              <td>{staff.gender}</td>
              <td>{staff.title}</td>
              <td>{staff.role}</td>
              <td>
              <button onClick={() => handleEdit(staff.id)}>Edit</button>
              </td>
              <td>
              <button onClick={() => handleDelete(staff.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      </div>
      </div>
      </div>
      </div>
            
        </div>
    )
}

export default Staff;