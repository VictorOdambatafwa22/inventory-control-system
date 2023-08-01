import React from 'react';


const Login = (() => {

    return (
        <div>
            <div>
                <div className='container col-5 col-sm-3 position-absolute top-50 start-50 translate-middle'>
                        <form>
                        <h1>KISCEN ENT.</h1>
                        <h2>Login</h2>

                        <div className="mb-3" col-xs-2>
                            <label for="staff" className="form-label">StaffID</label>
                            <input type="number" className="form-control" id="staff" aria-describedby="StaffId"></input>
                        </div>
                        <div className="mb-3">
                            <label for="password" className="form-label">Password</label>
                            <input type="number" className="form-control" id="password" aria-describedby="password"></input>
                        </div>
                        </form>
                        <button type="button" className="btn btn-primary"> Login </button>
                </div>
            </div>
        </div>
    )
})

export default Login;