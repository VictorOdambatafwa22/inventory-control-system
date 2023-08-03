
import React, { useState, useEffect } from 'react';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    productCode: '',
    pName: '',
    price: '',
    category: '',
    quantity: '',
    Instock: '',
    expiryDate: '',
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    fetchProducts();
  }, []); 

  const fetchProducts = () => {
    setLoading(true);
    fetch('https://inventory-server-mj8r.onrender.com/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (editingIndex !== null) {
      
      const editedProduct = {
        ...formData,
        id: products[editingIndex].id,
      };

      fetch(`https://inventory-server-mj8r.onrender.com/products/${editedProduct.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editedProduct),
      })
        .then((response) => response.json())
        .then((updatedProduct) => {
          const updatedProducts = [...products];
          updatedProducts[editingIndex] = updatedProduct;
          setProducts(updatedProducts);
          setFormData({
            productCode: '',
            pName: '',
            price: '',
            category: '',
            quantity: '',
            Instock: '',
            expiryDate: '',
          });
          setEditingIndex(null);
        })
        .catch((error) => {
          console.error('Error updating product:', error);
        });
    } else {
      
      fetch('https://inventory-server-mj8r.onrender.com/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((newProduct) => {
          setProducts([...products, newProduct]);
          setFormData({
            productCode: '',
            pName: '',
            price: '',
            category: '',
            quantity: '',
            Instock: '',
            expiryDate: '',
          });
        })
        .catch((error) => {
          console.error('Error adding product:', error);
        });
    }
  };

  const handleEdit = (index) => {

    setFormData(products[index]);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    const productId = products[index].id;
    fetch(`https://inventory-server-mj8r.onrender.com/products/${productId}`, {
      method: 'DELETE',
    })
      .then(() => {
        const updatedProducts = [...products];
        updatedProducts.splice(index, 1);
        setProducts(updatedProducts);
        setEditingIndex(null);
      })
      .catch((error) => {
        console.error('Error deleting product:', error);
      });
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = products.filter(
    (product) =>
      product.productCode.toString().includes(searchTerm) ||
      product.pName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6'>
      <h2>Product Table</h2>
      <div className='input-group mb-3'>
      <input
        type="text"
        className='form-control'
        placeholder="Search by product code or name"
        value={searchTerm}
        onChange={handleSearch}
      />
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
       
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th>Product Code</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Category</th>
              <th>Quantity</th>
              <th>In Stock</th>
              <th>Expiry Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product, index) => (
              <tr key={index}>
                <td>{product.productCode}</td>
                <td>{product.pName}</td>
                <td>{product.price}</td>
                <td>{product.category}</td>
                <td>{product.quantity}</td>
                <td>{product.Instock}</td>
                <td>{product.expiryDate}</td>
                <td>
                  <button className="btn btn-outline-primary btn-sm" onClick={() => handleEdit(index)}>Edit</button>
                  <button className='btn btn-outline-danger btn-sm' onClick={() => handleDelete(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
       
      )}
      </div>

      <div className='col-md-6'>
      <h2>{editingIndex !== null ? 'Edit Product' : 'Add New Product'}</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="mb-3">
          <label className="form-label">
            Product Code:
            <input
              type="number"
              name="productCode"
              value={formData.productCode}
              onChange={handleInputChange}
              className="form-control form-control-sm"
            />
          </label>
        </div>
        <div className="mb-3">
          <label className="form-label">
            Product name:
            <input
              type="text"
              name="pName"
              value={formData.pName}
              onChange={handleInputChange}
              className="form-control form-control-sm"
            />
          </label>
        </div>
        <div className="mb-3">
          <label className="form-label">
            Product Price:
            <input
              type="text"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
              className="form-control form-control-sm"
            />
          </label>
        </div>
        <div className="mb-3">
          <label className="form-label">
            Product Category:
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              className="form-control form-control-sm"
            />
          </label>
        </div>
        <div className="mb-3">
        <label className="form-label">
        Product Quantity:
        <input
          type="number"
          name="quantity"
          value={formData.quantity}
          onChange={handleInputChange}
          className="form-control form-control-sm"
        />
      </label>
    </div>
    <div className="mb-3">
      <label className="form-label">
        Instock:
        <input
          type="number"
          name="Instock"
          value={formData.Instock}
          onChange={handleInputChange}
          className="form-control form-control-sm"
        />
      </label>
    </div>
    <div className="mb-3">
      <label>
        Expiry Date:
        <input
          type="date"
          name="expiryDate"
          value={formData.expiryDate}
          onChange={handleInputChange}
          className='form-control form-control-sm'
        />
      </label>
    </div>
    <button className="btn btn-outline-primary" type="submit">
      {editingIndex !== null ? 'Save' : 'Submit'}
    </button>
  </form>
  </div>
  </div>
</div>

);
};

export default Products;

         