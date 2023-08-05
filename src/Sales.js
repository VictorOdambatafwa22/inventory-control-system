import React from "react";
import ViewProductsTable from "./ViewProductsTable";
function Sales({ handleSearch ,products,onEdit,onDelete}) {

  return (
    // <div>
    // {/* <div className="mx-0 p-5">
    //   <form>
    //     <div className="mb-3 col-xs-2" >
    //       <label htmlFor="staff" className="form-label">SALES</label>
    //       <input type="text" placeholder="Search products by name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleSearch} />
    //       </div>
    //   </form>
    // </div> */}
            <div >
                <div className="col-md-12 d-flex justify-content-center align-items-center pt-5">
                  
                  <input
                    type="text"
                    
                    placeholder="Product name..."
                    onChange={handleSearch}
                  />
                  
                </div>
    <ViewProductsTable products={products} onEdit={onEdit} onDelete ={onDelete}/>
  </div>

  );
}

export default Sales;