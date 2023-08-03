
import React, {useEffect, useState } from 'react';

import './App.css';
//import Navbar from './NavBar';
import Sales from './Sales'
import Footer from './Footer';
import ViewProductsTable from './ViewProductsTable';


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
    <Footer />
      </>
  );

// import React, { useState } from 'react';
// import { BrowserRouter } from 'react-router-dom';
// import Router from './Router';
// import './App.css';
// import Products from './Products';

// function App() {
//   // State to manage login error, logged-in user, and user role
//   const [loginError, setLoginError] = useState(null);
//   const [loggedInUser, setLoggedInUser] = useState(null);
//   const [userRole, setUserRole] = useState(null);

//   // Function to handle user login
//   const handleLogin = (staffId, password, navigate) => { 

//     console.log(staffId, password)

//      // Fetch data from the server
//     fetch('https://inventory-server-mj8r.onrender.com/staff')
//       .then((res) => res.json())
//       .then((data) => {

//         console.log(data)

//         // Find a matching user based on staffId and password
//         const matchedUser = data.find((data) => [data.staffID === staffId && data.password === password] , data.role);

//         console.log(matchedUser)

//         if (matchedUser) {
//           // If login is successful, update states
//           setLoginError(null);
//           setLoggedInUser(matchedUser.staffName);
//           setUserRole(matchedUser.role);
//           // Navigate to NavBar component upon successful login
//           navigate('/navbar'); 
//         } 
//         else {
//            // If login fails, show error message
//           setLoggedInUser(null);
//           setUserRole(null);
//           setLoginError('Invalid credentials. Please check your staff ID and password.');
//         }
//       })
//       console.log(userRole)
//   };

//   // Function to handle user logout
//   const handleLogout = () => {
//     setLoggedInUser(null);
//     setUserRole(null);
//   };

//   return (
//     <div className="App">
//       <BrowserRouter>
//         <Router handleLogin={handleLogin} handleLogout={handleLogout} loggedInUser={loggedInUser} loginError={loginError}/>
//       </BrowserRouter>
//       <Products/>
//     </div>
//   );
// }

// export default App;


}

export default App;
