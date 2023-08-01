import React from "react"

function Staff() {

    return (
        <div>

  <div class="mx-auto position-absolute top-50 start-50 translate-middle border border-1">
             
        <form>
            <h3>Add New Staff</h3>
        <div class="mb-3">
            <label for="sid">Staff ID</label><br/>
            <input type="text" id="sid" name="sid"/><br/>
        </div>
        <div class="mb-3">
            <label for="sname">Staff Name</label><br/>
            <input type="text" id="sname" name="sname"/><br/>
        </div>
        <div class="mb-3">
            <label for="sgender">Gender</label><br/>
            <input type="text" id="sgender" name="sgender"/><br/>
        </div>
        <div class="mb-3"> 
            <label for="stitle">Title</label><br/>
            <input type="text" id="stitle" name="stitle"/><br/>
        </div>   
        <div class="mb-3">
            <label for="srole">Role</label><br/>
            <input type="text" id="srole" name="srole"/><br/>
        </div>
        <div class="mb-3">
            <label for="spassword">Password</label><br/>
            <input type="password" id="spassword" name="spassword"/><br/>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
        </form>
        </div>

        <div>
        <button>Add New Staff</button>  
        </div>
        

        </div>
    )
}

export default Staff