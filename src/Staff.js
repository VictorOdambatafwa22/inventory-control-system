import React from "react";

function Staff({ formData, handleChange, handleSubmit, staffList, handleEdit, handleDelete, searchQuery, setSearchQuery, handleSearch }) {
  
  return (
  <div className="container">
    <div className="d-flex flex-wrap">
    <div className="flex-fill p-3">
    <form onSubmit={handleSubmit}>
  <h1>Add New Staff</h1> <br />
        <div className="mb-3">
          <label htmlFor="staffID">Staff ID</label><br/>
          <input type="text" id="staffID" name="staffID" value={formData.staffID} onChange={handleChange}/><br/>
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
      
              <div className="flex-fill p-3">
                <div class="mx-5 p-2">
                  <h1>Staff Members</h1>
                  <br />
                  <input
                    type="text"
                    placeholder="Enter staff name..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <button onClick={handleSearch}>Search</button>
                </div>

          
            <div className="col-md-12 d-flex justify-content-center align-items-center">
              <div className="table-responsive">
                <table
                  className="table table-hover table-bordered mt-5 mx-auto"
                  style={{ maxWidth: "100%" }}
                >
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
                          <button onClick={() => handleEdit(staff.id)}>
                            Edit
                          </button>
                        </td>
                        <td>
                          <button onClick={() => handleDelete(staff.id)}>
                            Delete
                          </button>
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
      
      
  
    
  );
}

export default Staff;
