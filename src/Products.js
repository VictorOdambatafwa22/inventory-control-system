import React from "react";

function Products(){
 
    return (
             <div className="position-absolute top-50 start-50 translate-middle">
                <h2>Add new product </h2>
                <form>
               <div className="mb-3">
               <label className="form-label">
                Product Code:
                <input type="number" name="Product Code" className="form-control"/>
                </label>
               </div>
               <div className="mb-3">
               <label className="form-label">
                Product name:
                <input type="text" name="Product name" className="form-control"/>
                </label>
               </div>
                <div className="mb-3">
                <label className="form-label">
                Product Price:
                <input type="text" name="Product Price" className="form-control"/>
                </label>
                </div>
               <div className="mb-3"> 
               <label className="form-label">
                 Product Category:
                <input type="text" name="Product category" className="form-control"/>
                </label>
               </div>
               <div className="mb-3">
               <label className="form-label">
                 Product Quantity:
                <input type="number" name="Product Quantity" className="form-control"/>
                </label>
               </div>
                <div className="mb-3">
                <label className="form-label">
                Instock:
                <input type="number" name="instock" className="form-control"/>
                </label>
                </div>
               <div className="mb-3">
               <label>
                Expiry Date:
                <input type="date"/>
                </label>
               </div>

                <button type="submit">Submit</button>


                </form>
             </div>

    );
    }

export default Products;