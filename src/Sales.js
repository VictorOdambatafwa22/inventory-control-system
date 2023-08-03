import React from "react";
function Sales({ handleSearch }) {
  return (
    <div>
    <div className='container col-5 col-sm-3 position-absolute top-0 start-50 translate-middle mt-5'>
      <form>

        <div className="mb-3 col-xs-2" >
          <label htmlFor="staff" className="form-label">SALES</label>
          <input type="text" placeholder="Search products by name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleSearch} />
          </div>
      </form>
    </div>
  </div>

  );
}

export default Sales;