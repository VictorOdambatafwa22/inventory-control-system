import React from "react"


function ViewProductsTable({ products, onEdit,onDelete }) {

   const list = products.map((product) => {

       return <tr key={product.id} >
            <td>{product.productCode}</td>
            <td>{product.pName}</td>
            <td>{product.price}</td>
            <td>{product.category}</td>
            <td>{product.quantity}</td>
            <td>{product.Instock}</td>

            <td><button onClick={() => onEdit(product)}>BUY</button>  <button onClick={() => onDelete(product.id)}>DELETE</button></td>

        </tr>
   })
    return (

        <div>

            <table id="products">
                <thead>
                    <tr>
                        <th>productCode</th>
                        <th>pName</th>
                        <th>price</th>
                        <th>category</th>
                        <th>quantity</th>
                        <th>Instock</th>
                       



                        <th></th>
                    </tr>

                </thead>
                <tbody>

                {list}


                </tbody>

            </table>

        </div>

    );
}

export default ViewProductsTable
