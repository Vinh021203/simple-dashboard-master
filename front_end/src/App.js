import React, { useState } from "react";
import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Employees from "./components/Employees";
import Products from "./components/Products";
import Categories from "./components/Categories";
import Warehouse from "./components/Warehouse";
import Cart from "./components/Cart";

const App = () => {
  const [activeMenu, setActiveMenu] = useState("Dashboard");

  const [employees, setEmployees] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", position: "Manager", phone: "123-456-7890" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", position: "Developer", phone: "098-765-4321" },
  ]);

  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Laptop",
      price: 999.99,
      category: "Electronics",
      description: "High-performance laptop",
      stock: 50,
    },
    { id: 2, name: "Smartphone", price: 699.99, category: "Electronics", description: "Latest smartphone", stock: 100 },
  ]);

  const [categories, setCategories] = useState([
    { id: 1, name: "Electronics", description: "Electronic devices and accessories" },
    { id: 2, name: "Clothing", description: "Fashion and apparel" },
  ]);

  const [cart, setCart] = useState([{ id: 1, productId: 1, quantity: 2, price: 999.99 }]);

  const handleEdit = (item, type) => {
    console.log(`Edit ${type}:`, item);
  };

  const handleDelete = (id, type) => {
    switch (activeMenu) {
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
    console.log(`Delete ${type} item with id:`, id);
  };

  const calculateInventoryValue = () => {
    return products.reduce((total, product) => total + product.price * product.stock, 0);
  };

  const calculateCartValue = () => {
    return cart.reduce((total, item) => total + item.quantity * item.price, 0);
  };

  const renderForm = () => {
    // Return a form based on activeMenu if needed
    return null;
  };

  const renderContent = () => {
    switch (activeMenu) {
      case "dashboard":
        return (
          <Dashboard
            employees={employees}
            products={products}
            categories={categories}
            calculateInventoryValue={calculateInventoryValue}
            calculateCartValue={calculateCartValue}
          />
        );
      case "employees":
        return (
          <Employees
            employees={employees}
            handleEdit={(item) => handleEdit(item, "employees")}
            handleDelete={(id) => handleDelete(id, "employees")}
            renderForm={renderForm}
          />
        );
      case "products":
        return (
          <Products
            products={products}
            handleEdit={(item) => handleEdit(item, "products")}
            handleDelete={(id) => handleDelete(id, "products")}
            renderForm={renderForm}
          />
        );
      case "categories":
        return (
          <Categories
            categories={categories}
            handleEdit={(item) => handleEdit(item, "categories")}
            handleDelete={(id) => handleDelete(id, "categories")}
            renderForm={renderForm}
          />
        );
      case "inventory":
        return <Warehouse products={products} setProducts={setProducts} />;
      case "cart":
        return <Cart cart={cart} products={products} handleDelete={(id) => handleDelete(id, "cart")} />;
      default:
        return <div>Select a menu item</div>;
    }
  };
  return (
    <div className="flex h-screen w-full bg-gray-700" style={{ display: "flex" }}>
      <Sidebar setActiveMenu={setActiveMenu} />
      <div className="w-full">{renderContent()}</div>
      {/* <MainContent employees={employees} products={products} categories={categories} /> */}
    </div>
  );
};

export default App;

// -----------------------------------------------------------------------------------------------------------------------------
