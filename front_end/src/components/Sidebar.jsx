import React from "react";
import { FaUsers, FaBox, FaTags, FaWarehouse, FaShoppingCart, FaChartBar } from "react-icons/fa";

const Sidebar = ({ setActiveMenu }) => {
  // Menu items array for easier mapping
  const menuItems = [
    { label: "Dashboard", icon: <FaChartBar />, key: "dashboard" },
    { label: "Employees", icon: <FaUsers />, key: "employees" },
    { label: "Products", icon: <FaBox />, key: "products" },
    { label: "Categories", icon: <FaTags />, key: "categories" },
    { label: "Inventory", icon: <FaWarehouse />, key: "inventory" },
    { label: "Cart", icon: <FaShoppingCart />, key: "cart" },
  ];

  return (
    <div className="w-1/4 max-w-[200px] bg-gray-800 p-4 space-y-4 text-white">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      </div>

      {/* Menu Items */}
      {menuItems.map((item) => (
        <div
          key={item.key}
          className="flex items-center gap-2 p-2 cursor-pointer hover:bg-gray-700 rounded transition-all duration-200"
          onClick={() => {
            setActiveMenu(item.key)
          console.log(item.key)}}
        >
          <div className="text-xl">{item.icon}</div>
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
