import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

const Login = ({ handleLogin }) => {
  const [staffId, setStaffId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the handleLogin function passed from the parent component
    handleLogin(staffId, password, navigate);
  };

  return (
    <div className='mt-5 pt 30px'>
      <div className='"col-md-12 d-flex justify-content-center align-items-center"'>
        <form onSubmit={handleSubmit}>
          <h1>KISCEN ENT.</h1>
          <h2>Login</h2>

          <div className="mb-3 col-xs-2" >
            <label htmlFor="staff" className="form-label">StaffID</label>
            <input type="number" className="form-control text-center" id="staff" aria-describedby="StaffId" value={staffId} onChange={(e) => setStaffId(e.target.value)} />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control text-center" id="password" aria-describedby="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
