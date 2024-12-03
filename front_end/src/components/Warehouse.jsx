import React from "react";

const Warehouse = ({ products, setProducts }) => {
  return (
    <div className="space-y-4 w-full h-screen text-gray-400 p-5">
      <h2 className="text-2xl font-bold">Inventory Management</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded-lg shadow items-center bg-gray-950">
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p>Category: {product.category}</p>
            <p>Stock: {product.stock}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Warehouse;
