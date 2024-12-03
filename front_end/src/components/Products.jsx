import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const Products = ({ products, handleEdit, handleDelete, renderForm }) => {
  return (
    <div className="space-y-4 p-4 text-gray-400">
      <h2 className="text-2xl font-bold">Product Management</h2>

      {/* Header */}
      <div className="grid grid-cols-8 gap-4 font-bold bg-gray-100 p-4 text-black">
        <div>Name</div>
        <div>Price</div>
        <div>Category</div>
        <div className="col-span-3">Description</div>
        <div>Stock</div>
        <div className="text-right">Actions</div>
      </div>

      {/* Product Rows */}
      {products.map((product) => (
        <div key={product.id} className="grid grid-cols-8 gap-4 p-4 border-b items-center">
          <div>{product.name}</div>
          <div>${product.price.toFixed(2)}</div>
          <div>{product.category}</div>
          <div className="col-span-3">{product.description}</div>
          <div>{product.stock}</div>
          <div className="flex justify-end space-x-2">
            <button
              onClick={() => handleEdit(product)}
              className="text-blue-500 hover:text-blue-700"
            >
              <FaEdit />
            </button>
            <button
              onClick={() => handleDelete(product.id)}
              className="text-red-500 hover:text-red-700"
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

export default Products;
