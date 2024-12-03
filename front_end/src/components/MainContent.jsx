
import React, { useState } from "react";
import Dashboard from "./Dashboard";
import Employees from "./Employees";
import Products from "./Products";
import Categories from "./Categories";
import Warehouse from "./Warehouse";
import Cart from "./Cart";

const MainContent = ({ employees, products, categories }) => {
  const [activeMenu, setActiveMenu] = useState("dashboard");

  const renderContent = () => {
    switch (activeMenu) {
      case "dashboard":
        return <Dashboard employees={employees} products={products} categories={categories} />;
      case "employees":
        return <Employees employees={employees} />;
      case "products":
        return <Products products={products} />;
      case "categories":
        return <Categories categories={categories} />;
      case "warehouse":
        return <Warehouse />;
      case "cart":
        return <Cart />;
      default:
        return <Dashboard employees={employees} products={products} categories={categories} />;
    }
  };

  return (
    <div style={{ flex: 1, padding: "20px" }}>
      {renderContent()}
    </div>
  );
};

export default MainContent;
