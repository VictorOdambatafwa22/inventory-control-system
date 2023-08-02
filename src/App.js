import React, { useState } from 'react';
import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './Router';

import './App.css';
//import Navbar from './NavBar';
import Sales from './Sales'
import ViewProductsTable from './ViewProductsTable';
import Products from './Products';

//import Sales from './Sales';

function App() {
  const [products,setProducts]=useState([])
  const [query, setQuery] = useState("")

  useEffect(() => {
    fetch("https://inventory-server-mj8r.onrender.com/products?q=" + query)
      .then((resp) => resp.json())
      .then(product => setProducts(product))
  }, [query])

  function handleSearch(e) {
    setQuery(e.target.value)
 }

 function handleDeleteClick(id) {
  fetch(`https://inventory-server-mj8r.onrender.com/products/${id}`, {
    method: "DELETE",
  })
    .then((r) => r.json())
    .then(() => deleteProduct(id));
}

function handleEditClick(prod) {
  const updatedProd={...prod,Instock:prod.Instock-1}
  fetch(`https://inventory-server-mj8r.onrender.com/products/${prod.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(
     updatedProd
    ),

  })
    .then((r) => r.json())
    .then((prod) => editProduct(prod));
}

 function deleteProduct(id){
  const stud=products.filter((product)=> product.id!==id)
  setProducts(stud)
 }

 function editProduct(prod){
  const stud=products.map((product)=> product.id===prod.id? prod:product)
  setProducts(stud)
  const sale={...prod}
  delete sale.id 
  delete sale.Instock
  sale.date=new Date()


  fetch("https://inventory-server-mj8r.onrender.com/sales", {

  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(
   sale
  ),
});

 }

  return (
    <>
      
     
      <Sales handleSearch={handleSearch} />
      <ViewProductsTable products={products} onEdit={handleEditClick} onDelete={handleDeleteClick}/>
    
      </>
  );
}

export default App;
