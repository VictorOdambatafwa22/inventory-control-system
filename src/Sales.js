import React from "react";
import ViewProductsTable from "./ViewProductsTable";
function Sales({ handleSearch ,products,onEdit,onDelete}) {

  return (
    <div>
    <div className='container col-5 col-sm-3 position-absolute top-50 start-50 translate-middle '>
      <form>

        <div className="mb-3 col-xs-2" >
          <label htmlFor="staff" className="form-label">SALES</label>
          <input type="text" placeholder="Search products by name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleSearch} />
          </div>
      </form>
      <ViewProductsTable products={products} onEdit={onEdit} onDelete ={onDelete}/>
    </div>
  </div>

  );
}

export default Sales;