import React, { useState } from "react";
import { FaUsers, FaBox, FaTags, FaWarehouse, FaShoppingCart, FaEdit, FaTrash, FaPlus, FaChartBar } from "react-icons/fa";

const AdminDashboard = () => {
  const [activeMenu, setActiveMenu] = useState("dashboard");
  const [employees, setEmployees] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", position: "Manager", phone: "123-456-7890" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", position: "Developer", phone: "098-765-4321" },
  ]);

  const [products, setProducts] = useState([
    { id: 1, name: "Laptop", price: 999.99, category: "Electronics", description: "High-performance laptop", stock: 50 },
    { id: 2, name: "Smartphone", price: 699.99, category: "Electronics", description: "Latest smartphone", stock: 100 },
  ]);

  const [categories, setCategories] = useState([
    { id: 1, name: "Electronics", description: "Electronic devices and accessories" },
    { id: 2, name: "Clothing", description: "Fashion and apparel" },
  ]);

  const [cart, setCart] = useState([
    { id: 1, productId: 1, quantity: 2, price: 999.99 },
  ]);

  const [formData, setFormData] = useState({});
  const [isEditing, setIsEditing] = useState(false);

  const handleTitleClick = () => {
    setActiveMenu("dashboard");
    setIsEditing(false);
    setFormData({});
  };

  const calculateInventoryValue = () => {
    return products.reduce((total, product) => total + (product.price * product.stock), 0);
  };

  const calculateCartValue = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
    setIsEditing(false);
    setFormData({});
  };

  const handleSubmit = (e, type) => {
    e.preventDefault();
    switch (type) {
      case "employees":
        if (isEditing) {
          setEmployees(employees.map(emp => emp.id === formData.id ? formData : emp));
        } else {
          setEmployees([...employees, { ...formData, id: employees.length + 1 }]);
        }
        break;
      case "products":
        if (isEditing) {
          setProducts(products.map(prod => prod.id === formData.id ? formData : prod));
        } else {
          setProducts([...products, { ...formData, id: products.length + 1 }]);
        }
        break;
      case "categories":
        if (isEditing) {
          setCategories(categories.map(cat => cat.id === formData.id ? formData : cat));
        } else {
          setCategories([...categories, { ...formData, id: categories.length + 1 }]);
        }
        break;
      default:
        break;
    }
    setFormData({});
    setIsEditing(false);
  };

  const handleEdit = (item, type) => {
    setFormData(item);
    setIsEditing(true);
  };

  const handleDelete = (id, type) => {
    switch (type) {
      case "employees":
        setEmployees(employees.filter(emp => emp.id !== id));
        break;
      case "products":
        setProducts(products.filter(prod => prod.id !== id));
        break;
      case "categories":
        setCategories(categories.filter(cat => cat.id !== id));
        break;
      case "cart":
        setCart(cart.filter(item => item.id !== id));
        break;
      default:
        break;
    }
  };

  const renderForm = () => {
    switch (activeMenu) {
      case "employees":
        return (
          <form onSubmit={(e) => handleSubmit(e, "employees")} className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              value={formData.name || ""}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            />
            <input
              type="email"
              placeholder="Email"
              value={formData.email || ""}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            />
            <input
              type="text"
              placeholder="Position"
              value={formData.position || ""}
              onChange={(e) => setFormData({ ...formData, position: e.target.value })}
              className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            />
            <input
              type="text"
              placeholder="Phone"
              value={formData.phone || ""}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            />
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-300"
            >
              {isEditing ? "Update Employee" : "Add Employee"}
            </button>
          </form>
        );
      case "products":
        return (
          <form onSubmit={(e) => handleSubmit(e, "products")} className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              value={formData.name || ""}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            />
            <input
              type="number"
              placeholder="Price"
              value={formData.price || ""}
              onChange={(e) => setFormData({ ...formData, price: parseFloat(e.target.value) })}
              className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            />
            <input
              type="text"
              placeholder="Category"
              value={formData.category || ""}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            />
            <textarea
              placeholder="Description"
              value={formData.description || ""}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            />
            <input
              type="number"
              placeholder="Stock"
              value={formData.stock || ""}
              onChange={(e) => setFormData({ ...formData, stock: parseInt(e.target.value) })}
              className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            />
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-300"
            >
              {isEditing ? "Update Product" : "Add Product"}
            </button>
          </form>
        );
      case "categories":
        return (
          <form onSubmit={(e) => handleSubmit(e, "categories")} className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              value={formData.name || ""}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            />
            <textarea
              placeholder="Description"
              value={formData.description || ""}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            />
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-300"
            >
              {isEditing ? "Update Category" : "Add Category"}
            </button>
          </form>
        );
      default:
        return null;
    }
  };

  const renderContent = () => {
    switch (activeMenu) {
      case "dashboard":
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Dashboard Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm opacity-75">Total Employees</p>
                    <h3 className="text-3xl font-bold">{employees.length}</h3>
                  </div>
                  <FaUsers className="text-4xl opacity-75" />
                </div>
              </div>
              <div className="bg-green-500 text-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm opacity-75">Total Products</p>
                    <h3 className="text-3xl font-bold">{products.length}</h3>
                  </div>
                  <FaBox className="text-4xl opacity-75" />
                </div>
              </div>
              <div className="bg-purple-500 text-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm opacity-75">Total Categories</p>
                    <h3 className="text-3xl font-bold">{categories.length}</h3>
                  </div>
                  <FaTags className="text-4xl opacity-75" />
                </div>
              </div>
              <div className="bg-orange-500 text-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm opacity-75">Total Inventory Value</p>
                    <h3 className="text-3xl font-bold">${calculateInventoryValue().toFixed(2)}</h3>
                  </div>
                  <FaWarehouse className="text-4xl opacity-75" />
                </div>
              </div>
              <div className="bg-red-500 text-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm opacity-75">Total Cart Value</p>
                    <h3 className="text-3xl font-bold">${calculateCartValue().toFixed(2)}</h3>
                  </div>
                  <FaShoppingCart className="text-4xl opacity-75" />
                </div>
              </div>
            </div>
          </div>
        );
      case "employees":
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Employee Management</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead>
                  <tr>
                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left">Name</th>
                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left">Email</th>
                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left">Position</th>
                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left">Phone</th>
                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {employees.map((employee) => (
                    <tr key={employee.id}>
                      <td className="px-6 py-4 border-b border-gray-300">{employee.name}</td>
                      <td className="px-6 py-4 border-b border-gray-300">{employee.email}</td>
                      <td className="px-6 py-4 border-b border-gray-300">{employee.position}</td>
                      <td className="px-6 py-4 border-b border-gray-300">{employee.phone}</td>
                      <td className="px-6 py-4 border-b border-gray-300">
                        <button
                          onClick={() => handleEdit(employee, "employees")}
                          className="text-blue-500 hover:text-blue-700 mr-2"
                        >
                          <FaEdit />
                        </button>
                        <button
                          onClick={() => handleDelete(employee.id, "employees")}
                          className="text-red-500 hover:text-red-700"
                        >
                          <FaTrash />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {renderForm()}
          </div>
        );
      case "products":
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Product Management</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead>
                  <tr>
                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left">Name</th>
                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left">Price</th>
                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left">Category</th>
                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left">Description</th>
                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left">Stock</th>
                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product.id}>
                      <td className="px-6 py-4 border-b border-gray-300">{product.name}</td>
                      <td className="px-6 py-4 border-b border-gray-300">${product.price}</td>
                      <td className="px-6 py-4 border-b border-gray-300">{product.category}</td>
                      <td className="px-6 py-4 border-b border-gray-300">{product.description}</td>
                      <td className="px-6 py-4 border-b border-gray-300">{product.stock}</td>
                      <td className="px-6 py-4 border-b border-gray-300">
                        <button
                          onClick={() => handleEdit(product, "products")}
                          className="text-blue-500 hover:text-blue-700 mr-2"
                        >
                          <FaEdit />
                        </button>
                        <button
                          onClick={() => handleDelete(product.id, "products")}
                          className="text-red-500 hover:text-red-700"
                        >
                          <FaTrash />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {renderForm()}
          </div>
        );
      case "categories":
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Category Management</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead>
                  <tr>
                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left">Name</th>
                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left">Description</th>
                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {categories.map((category) => (
                    <tr key={category.id}>
                      <td className="px-6 py-4 border-b border-gray-300">{category.name}</td>
                      <td className="px-6 py-4 border-b border-gray-300">{category.description}</td>
                      <td className="px-6 py-4 border-b border-gray-300">
                        <button
                          onClick={() => handleEdit(category, "categories")}
                          className="text-blue-500 hover:text-blue-700 mr-2"
                        >
                          <FaEdit />
                        </button>
                        <button
                          onClick={() => handleDelete(category.id, "categories")}
                          className="text-red-500 hover:text-red-700"
                        >
                          <FaTrash />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {renderForm()}
          </div>
        );
      case "inventory":
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Inventory Management</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {products.map((product) => (
                <div key={product.id} className="bg-white p-4 rounded-lg shadow">
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="text-gray-600">Category: {product.category}</p>
                  <p className="text-gray-600">Stock: {product.stock}</p>
                  <input
                    type="number"
                    value={product.stock}
                    onChange={(e) => {
                      const newProducts = products.map((p) =>
                        p.id === product.id ? { ...p, stock: parseInt(e.target.value) } : p
                      );
                      setProducts(newProducts);
                    }}
                    className="mt-2 w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                  />
                </div>
              ))}
            </div>
          </div>
        );
      case "cart":
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Cart Management</h2>
            <div className="space-y-4">
              {cart.map((item) => {
                const product = products.find((p) => p.id === item.productId);
                return (
                  <div key={item.id} className="bg-white p-4 rounded-lg shadow flex justify-between items-center">
                    <div>
                      <h3 className="text-lg font-semibold">{product?.name}</h3>
                      <p className="text-gray-600">Quantity: {item.quantity}</p>
                      <p className="text-gray-600">Price: ${item.price}</p>
                      <p className="text-gray-600">Total: ${item.quantity * item.price}</p>
                    </div>
                    <button
                      onClick={() => handleDelete(item.id, "cart")}
                      className="text-red-500 hover:text-red-700"
                    >
                      <FaTrash />
                    </button>
                  </div>
                );
              })}
              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="text-xl font-bold">
                  Total: ${cart.reduce((acc, item) => acc + item.quantity * item.price, 0).toFixed(2)}
                </p>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="w-1/4 bg-gray-800 p-4 space-y-2">
        <div 
          onClick={handleTitleClick}
          className="flex items-center justify-center p-4 cursor-pointer hover:bg-gray-700 rounded transition-colors duration-200"
        >
          <h1 className="text-white text-2xl font-bold flex items-center gap-2">
            <FaChartBar />
            Admin Dashboard
          </h1>
        </div>
        <button
          onClick={() => handleMenuClick("employees")}
          className={`w-full flex items-center space-x-2 p-2 rounded ${
            activeMenu === "employees" ? "bg-blue-500 text-white" : "text-gray-300 hover:bg-gray-700"
          }`}
        >
          <FaUsers />
          <span>Employees</span>
        </button>
        <button
          onClick={() => handleMenuClick("products")}
          className={`w-full flex items-center space-x-2 p-2 rounded ${
            activeMenu === "products" ? "bg-blue-500 text-white" : "text-gray-300 hover:bg-gray-700"
          }`}
        >
          <FaBox />
          <span>Products</span>
        </button>
        <button
          onClick={() => handleMenuClick("categories")}
          className={`w-full flex items-center space-x-2 p-2 rounded ${
            activeMenu === "categories" ? "bg-blue-500 text-white" : "text-gray-300 hover:bg-gray-700"
          }`}
        >
          <FaTags />
          <span>Categories</span>
        </button>
        <button
          onClick={() => handleMenuClick("inventory")}
          className={`w-full flex items-center space-x-2 p-2 rounded ${
            activeMenu === "inventory" ? "bg-blue-500 text-white" : "text-gray-300 hover:bg-gray-700"
          }`}
        >
          <FaWarehouse />
          <span>Inventory</span>
        </button>
        <button
          onClick={() => handleMenuClick("cart")}
          className={`w-full flex items-center space-x-2 p-2 rounded ${
            activeMenu === "cart" ? "bg-blue-500 text-white" : "text-gray-300 hover:bg-gray-700"
          }`}
        >
          <FaShoppingCart />
          <span>Cart</span>
        </button>
      </div>
      <div className="w-3/4 p-8">{renderContent()}</div>
    </div>
  );
};

export default AdminDashboard;