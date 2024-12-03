import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const Categories = ({ categories, handleEdit, handleDelete, renderForm }) => {
  return (
    <div className="space-y-4 p-4 text-gray-100">
      <h2 className="text-2xl font-bold">Category Management</h2>

      {/* Header */}
      <div className="grid grid-cols-8 gap-4 font-bold bg-gray-950 p-4">
        <div className="col-span-2 text-center hover:bg-gray-800">Name</div>
        <div className="col-span-4 text-center hover:bg-gray-800">Description</div>
        <div className="col-span-2 text-center hover:bg-gray-800">Actions</div>
      </div>

      {/* Category Rows */}
      {categories.map((category) => (
        <div
          key={category.id}
          className="grid grid-cols-8 gap-4 items-center p-4 hover:bg-gray-800 border-b"
        >
          <div className="col-span-2 text-center">{category.name}</div>
          <div className="col-span-4 text-center">{category.description}</div>
          <div className="col-span-2 flex justify-center space-x-4">
            <button
              className="text-blue-500 hover:text-blue-700"
              onClick={() => handleEdit(category)}
            >
              <FaEdit />
            </button>
            <button
              className="text-red-500 hover:text-red-700"
              onClick={() => handleDelete(category.id)}
            >
              <FaTrash />
            </button>
          </div>
        </div>
      ))}

      {/* Render Form */}
      {renderForm && renderForm()}
    </div>
  );
};

export default Categories;
