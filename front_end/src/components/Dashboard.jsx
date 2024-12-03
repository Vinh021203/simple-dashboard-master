import React from "react";
import { FaUsers, FaBox, FaTags, FaWarehouse, FaShoppingCart } from "react-icons/fa";

const Dashboard = ({ employees, products, categories, calculateInventoryValue, calculateCartValue }) => {
  return (
    <div className="space-y-6 p-4 text-gray-100">
      <h2 className="text-2xl font-bold">Dashboard Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg">
          <p>Total Employees</p>
          <h3 className="text-3xl font-bold">{employees.length}</h3>
          <FaUsers className="text-4xl opacity-75" />
        </div>
        <div className="bg-green-500 text-white p-6 rounded-lg shadow-lg">
          <p>Total Products</p>
          <h3 className="text-3xl font-bold">{products.length}</h3>
          <FaBox className="text-4xl opacity-75" />
        </div>
        <div className="bg-purple-500 text-white p-6 rounded-lg shadow-lg">
          <p>Total Categories</p>
          <h3 className="text-3xl font-bold">{categories.length}</h3>
          <FaTags className="text-4xl opacity-75" />
        </div>
        <div className="bg-orange-500 text-white p-6 rounded-lg shadow-lg">
          <p>Total Inventory Value</p>
          <h3 className="text-3xl font-bold">${calculateInventoryValue().toFixed(2)}</h3>
          <FaWarehouse className="text-4xl opacity-75" />
        </div>
        <div className="bg-red-500 text-white p-6 rounded-lg shadow-lg">
          <p>Total Cart Value</p>
          <h3 className="text-3xl font-bold">${calculateCartValue().toFixed(2)}</h3>
          <FaShoppingCart className="text-4xl opacity-75" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
