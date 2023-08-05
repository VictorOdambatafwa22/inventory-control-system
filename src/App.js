

import React, { useState, useEffect } from "react";

import { BrowserRouter } from 'react-router-dom';
import Router from './Router';

import './App.css';
import Footer from './Footer';

//import Staff from "./Staff";
//import Sales from "./Sales";
//import ViewProductsTable from "./ViewProductsTable";
import NavBar from "./NavBar";

// function App() {

//   const [formData, setFormData] = useState({
//     staffID: '',
//     staffName: '',
//     gender: '',
//     title: '',
//     role: '',
//     password: '',
//   });

//   const [staffList, setStaffList] = useState([]);
//   const [editStaffId, setEditStaffId] = useState(null);
//   const [searchQuery, setSearchQuery] = useState("");

//   const [products,setProducts]=useState([])
//   const [query, setQuery] = useState("")

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (editStaffId) {
//       fetch(`https://inventory-server-mj8r.onrender.com/staff/${editStaffId}`, {
//             method: 'PATCH',
//             headers: {
//               'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(formData),
//           })
//             .then((response) => response.json())
//             .then((updatedStaff) => {
              
//               const updatedStaffList = staffList.map((staff) =>
//                 staff.id === editStaffId ? updatedStaff : staff
//               );
//               setStaffList(updatedStaffList);
//               setFormData({
//                 staffID: '',
//                 staffName: '',
//                 gender: '',
//                 title: '',
//                 role: '',
//                 password: '',
//               });
//               setEditStaffId(null); 
//             })
//             .catch((error) => {
//               console.error('Error:', error);
//             });
//     } else {
//       fetch('https://inventory-server-mj8r.onrender.com/staff', {
//             method: 'POST',
//             headers: {
//               'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(formData),
//           })
//             .then((response) => response.json())
//             .then((newStaff) => {
//               setStaffList([...staffList, newStaff]);
//               setFormData({
//                 staffID: '',
//                 staffName: '',
//                 gender: '',
//                 title: '',
//                 role: '',
//                 password: '',
//               });
//             })
//             .catch((error) => {
//               console.error('Error:', error);
//             });
//         }
//     }
  

//   const handleSearch = () => {
//     const filteredStaffList = staffList.filter((staff) =>
//       staff.staffName.toLowerCase().includes(searchQuery.toLowerCase())
//     );
//     setStaffList(filteredStaffList);
//     setSearchQuery("");
//   };

//   const handleDelete = (id) => {
//     fetch(`https://inventory-server-mj8r.onrender.com/staff/${id}`, {
//       method: 'DELETE',
//     })
//     .then((response) => response.json())
//     .then(() => {
//       setStaffList(staffList.filter((staff) => staff.id !== id));

//     })
// .catch ((error) => {
//     console.error('Error:', error);
//   })
//   };

//   const handleEdit = (id) => {
//     let editedStaff = null;
//     staffList.forEach((staff) => {
//       if (staff.id === id) {
//         editedStaff = staff;
//       }
//     });
  
//     if (editedStaff) {
//       setFormData({
//         staffID: editedStaff.staffID,
//         staffName: editedStaff.staffName,
//         gender: editedStaff.gender,
//         title: editedStaff.title,
//         role: editedStaff.role,
//         password: editedStaff.password,
//       });
//       setEditStaffId(id);
//     }
//   };
  


//   useEffect(() => {
//     fetch('https://inventory-server-mj8r.onrender.com/staff')
//       .then((response) => response.json())
//       .then((staffData) => {
//         setStaffList(staffData)
//       })
//       .catch((error) => {
//         console.error('Error:', error);
//       })
//   }, []);

  //return (
    // <div className="container">
    //   <Staff
        // formData={formData}
        // handleChange={handleChange}
        // handleSubmit={handleSubmit}
        // staffList={staffList}
        // handleEdit={handleEdit}
        // handleDelete={handleDelete}
        // searchQuery={searchQuery}
        // setSearchQuery={setSearchQuery}
        // handleSearch={handleSearch}
    //   />


//import Navbar from './NavBar';
//import Sales from './Sales'
//import Footer from './Footer';
//import ViewProductsTable from './ViewProductsTable';


//import Sales from './Sales';

function App() {

  const [staffList, setStaffList] = useState([]);
  const [editStaffId, setEditStaffId] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [products,setProducts]=useState([])
  const [query, setQuery] = useState("")

    // State to manage login error, logged-in user, and user role
    const [loginError, setLoginError] = useState(null);
    const [loggedInUser, setLoggedInUser] = useState(null);
    const [userRole, setUserRole] = useState(null);

    const [formData, setFormData] = useState({
          staffID: '',
          staffName: '',
          gender: '',
          title: '',
          role: '',
          password: '',
        });

    const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

    const handleSubmit = (e) => {
    e.preventDefault();

    if (editStaffId) {
      fetch(`https://inventory-server-mj8r.onrender.com/staff/${editStaffId}`, {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          })
            .then((response) => response.json())
            .then((updatedStaff) => {
              
              const updatedStaffList = staffList.map((staff) =>
                staff.id === editStaffId ? updatedStaff : staff
              );
              setStaffList(updatedStaffList);
              setFormData({
                staffID: '',
                staffName: '',
                gender: '',
                title: '',
                role: '',
                password: '',
              });
              setEditStaffId(null); 
            })
            .catch((error) => {
              console.error('Error:', error);
            });
    } else {
      fetch('https://inventory-server-mj8r.onrender.com/staff', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          })
            .then((response) => response.json())
            .then((newStaff) => {
              setStaffList([...staffList, newStaff]);
              setFormData({
                staffID: '',
                staffName: '',
                gender: '',
                title: '',
                role: '',
                password: '',
              });
            })
            .catch((error) => {
              console.error('Error:', error);
            });
        }
    }


      const handleEdit = (id) => {
    let editedStaff = null;
    staffList.forEach((staff) => {
      if (staff.id === id) {
        editedStaff = staff;
      }
    });
  
    if (editedStaff) {
      setFormData({
        staffID: editedStaff.staffID,
        staffName: editedStaff.staffName,
        gender: editedStaff.gender,
        title: editedStaff.title,
        role: editedStaff.role,
        password: editedStaff.password,
      });
      setEditStaffId(id);
    }
  };

    const handleStaffSearch = () => {
    const filteredStaffList = staffList.filter((staff) =>
      staff.staffName.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setStaffList(filteredStaffList);
    setSearchQuery("");
  };

    const handleDelete = (id) => {
    fetch(`https://inventory-server-mj8r.onrender.com/staff/${id}`, {
      method: 'DELETE',
    })
    .then((response) => response.json())
    .then(() => {
      setStaffList(staffList.filter((staff) => staff.id !== id));

    })
.catch ((error) => {
    console.error('Error:', error);
  })
  };


  // Function to handle user login
  const handleLogin = (staffId, password, navigate) => { 

    console.log(staffId, password)



     // Fetch data from the server
    fetch('https://inventory-server-mj8r.onrender.com/staff')
      .then((res) => res.json())
      .then((data) => {

        console.log(data)

        // Find a matching user based on staffId and password
        const matchedUser = data.find((data) => [data.staffID === staffId && data.password === password] , data.role);

        console.log(matchedUser)

        if (matchedUser) {
          // If login is successful, update states
          setLoginError(null);
          setLoggedInUser(matchedUser.staffName);
          setUserRole(matchedUser.role);
          // Navigate to NavBar component upon successful login
          navigate('/products'); 
        } 
        else {
           // If login fails, show error message
          setLoggedInUser(null);
          setUserRole(null);
          setLoginError('Invalid credentials. Please check your staff ID and password.');
        }
      })
      console.log(userRole)
  };

  // Function to handle user logout
  const handleLogout = () => {
    setLoggedInUser(null);
    setUserRole(null);
  };

    
  
  useEffect(() => {
    fetch("https://inventory-server-mj8r.onrender.com/products?pName="+query)
      .then((resp) => resp.json())
      .then(product => setProducts(product))
        fetch('https://inventory-server-mj8r.onrender.com/staff')
      .then((response) => response.json())
      .then((staffData) => {
        setStaffList(staffData)
      })
      .catch((error) => {
        console.error('Error:', error);
      })
  }, [query])



  function handleSearch(e) {
    setQuery(e.target.value)
    console.log(e.target.value)
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
   
    <BrowserRouter>
    <NavBar user={loggedInUser} handleLogout={handleLogout} />
    <Router handleLogin={handleLogin} handleLogout={handleLogout} loggedInUser={loggedInUser} loginError={loginError} handleSearch={handleSearch} products={products} onEdit={handleEditClick} onDelete={handleDeleteClick}  formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        staffList={staffList}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleStaffSearch={handleStaffSearch}/>
      {/* <Sales handleSearch={handleSearch} />
      <ViewProductsTable products={products} onEdit={handleEditClick} onDelete={handleDeleteClick}/> */}
    
    
    </BrowserRouter>
    <Footer />

      </>

  )

  // State to manage login error, logged-in user, and user role
  // const [loginError, setLoginError] = useState(null);
  // const [loggedInUser, setLoggedInUser] = useState(null);
  // const [userRole, setUserRole] = useState(null);

  // Function to handle user login
  // const handleLogin = (staffId, password, navigate) => { 

  //   console.log(staffId, password)

  //    // Fetch data from the server
  //   fetch('https://inventory-server-mj8r.onrender.com/staff')
  //     .then((res) => res.json())
  //     .then((data) => {

  //       console.log(data)

  //       // Find a matching user based on staffId and password
  //       const matchedUser = data.find((data) => [data.staffID === staffId && data.password === password] , data.role);

  //       console.log(matchedUser)

  //       if (matchedUser) {
  //         // If login is successful, update states
  //         setLoginError(null);
  //         setLoggedInUser(matchedUser.staffName);
  //         setUserRole(matchedUser.role);
  //         // Navigate to NavBar component upon successful login
  //         navigate('/navbar'); 
  //       } 
  //       else {
  //          // If login fails, show error message
  //         setLoggedInUser(null);
  //         setUserRole(null);
  //         setLoginError('Invalid credentials. Please check your staff ID and password.');
  //       }
  //     })
  //     console.log(userRole)
  // };

  // Function to handle user logout
  // const handleLogout = () => {
  //   setLoggedInUser(null);
  //   setUserRole(null);
  // };

  return (
    <div className="App">
      <BrowserRouter>
        <Router handleLogin={handleLogin} handleLogout={handleLogout} loggedInUser={loggedInUser} loginError={loginError}/>
      </BrowserRouter>

    </div>

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
//}

export default App;
