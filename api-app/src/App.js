import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [fetchData, setFetchData] = useState([]);
  const [addData, setAddData] = useState({ pName: "", pPrice: "", pDesc: "" });
  const [editData, setEditData] = useState({
    _id: "",
    pName: "",
    pPrice: "",
    pDesc: "",
  });

  useEffect(() => {
    apiFetch();
  }, []);

  const apiFetch = async () => {
    try {
      const res = await axios.get(
        "https://p-9x7e.onrender.com/products/products"
      );
      setFetchData(res.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const deleteApi = async (deleteId) => {
    try {
      const res = await axios.delete(
        `https://p-9x7e.onrender.com/products/delete-product/${deleteId}`
      );
      apiFetch();
      alert(res.data.message);
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const addApi = async () => {
    try {
      const res = await axios.post(
        "https://p-9x7e.onrender.com/products/add-product",
        addData
      );
      alert(res.data.message);
      apiFetch();
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  const editApi = async (editId) => {
    try {
      const res = await axios.put(
        `https://p-9x7e.onrender.com/products/edit-product/${editId}`,
        editData
      );
      alert(res.data.message);
      apiFetch();
    } catch (error) {
      console.error("Error editing product:", error);
    }
  };

  const handleAddInputChange = (event) => {
    const { name, value } = event.target;
    setAddData({ ...addData, [name]: value });
  };

  const handleEditInputChange = (event) => {
    const { name, value } = event.target;
    setEditData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8 grid place-items-center">
      <div className="max-w-3xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-gray-800 text-center">
          Api Assignment
        </h1>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Add Product</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              className="form-input rounded-md shadow-sm py-2 px-4 block w-full sm:w-auto"
              placeholder="Product Name"
              name="pName"
              value={addData.pName}
              onChange={handleAddInputChange}
            />
            <input
              type="text"
              className="form-input rounded-md shadow-sm py-2 px-4 block w-full sm:w-auto"
              placeholder="Product Price"
              name="pPrice"
              value={addData.pPrice}
              onChange={handleAddInputChange}
            />
            <input
              type="text"
              className="form-input rounded-md shadow-sm py-2 px-4 block w-full sm:w-auto"
              placeholder="Product Description"
              name="pDesc"
              value={addData.pDesc}
              onChange={handleAddInputChange}
            />
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md shadow-sm transition duration-300"
              onClick={addApi}
            >
              Add Product
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Edit Product</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              className="form-input rounded-md shadow-sm py-2 px-4 block w-full sm:w-auto"
              placeholder="Product ID to Edit"
              name="_id"
              value={editData._id}
              onChange={handleEditInputChange}
            />
            <input
              type="text"
              className="form-input rounded-md shadow-sm py-2 px-4 block w-full sm:w-auto"
              placeholder="New Product Name"
              name="pName"
              value={editData.pName}
              onChange={handleEditInputChange}
            />
            <input
              type="text"
              className="form-input rounded-md shadow-sm py-2 px-4 block w-full sm:w-auto"
              placeholder="New Product Price"
              name="pPrice"
              value={editData.pPrice}
              onChange={handleEditInputChange}
            />
            <input
              type="text"
              className="form-input rounded-md shadow-sm py-2 px-4 block w-full sm:w-auto"
              placeholder="New Product Description"
              name="pDesc"
              value={editData.pDesc}
              onChange={handleEditInputChange}
            />
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md shadow-sm transition duration-300"
              onClick={() => editApi(editData._id)}
            >
              Update
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Products</h2>
          <table className="w-full">
            <thead>
              <tr>
                <th className="py-2 px-4 bg-gray-200 text-left">Product ID</th>
                <th className="py-2 px-4 bg-gray-200 text-left">
                  Product Name
                </th>
                <th className="py-2 px-4 bg-gray-200 text-left">Price</th>
                <th className="py-2 px-4 bg-gray-200 text-left">Description</th>
                <th className="py-2 px-4 bg-gray-200 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {fetchData.map((product) => (
                <tr
                  key={product._id}
                  className="hover:bg-gray-100 transition duration-300"
                >
                  <td className="py-2 px-4">{product._id}</td>
                  <td className="py-2 px-4">{product.pName}</td>
                  <td className="py-2 px-4">${product.pPrice}</td>
                  <td className="py-2 px-4">{product.pDesc}</td>
                  <td className="py-2 px-4">
                    <button
                      className="bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded-md shadow-sm transition duration-300"
                      onClick={() => deleteApi(product._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
