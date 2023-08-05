import React from "react"


function ViewProductsTable({ products, onEdit, onDelete }) {

    const list = products.map((product) => {

        return <tr key={product.id} >
            <td>{product.productCode}</td>
            <td>{product.pName}</td>
            <td>{product.price}</td>
            <td>{product.category}</td>
            <td>{product.quantity}</td>
            <td>{product.Instock}</td>

            <td><button onClick={() => onEdit(product)}>BUY</button></td><td><button onClick={() => onDelete(product.id)}>DELETE</button></td>





        </tr>
    })
    return (

        <div>



            <div className="col-md-12 d-flex justify-content-center align-items-center">
                <div className="table-responsive">

                    <table
                        className="table table-hover table-bordered mt-5 mx-auto"
                        style={{ maxWidth: "100%" }}
                    >
                    


                            <thead>
                                <tr>
                                    <th>productCode</th>
                                    <th>pName</th>
                                    <th>price</th>
                                    <th>category</th>
                                    <th>quantity</th>
                                    <th>Instock</th>
                                    <th>Buy</th>
                                    <th>Delete</th>




                                    
                                </tr>

                            </thead>
                            <tbody>

                                {list}


                            </tbody>

                    </table>

                </div>
            </div>

        </div>


    );
}

export default ViewProductsTable
