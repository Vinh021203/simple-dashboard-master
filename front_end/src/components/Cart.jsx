import React from "react";

const Cart = ({ cart, products, handleDelete }) => {
  return (
    <div className="space-y-4 w-full h-screen text-gray-400 p-5">
      <h2 className="text-2xl font-bold">Cart Management</h2>
      {cart.map((item) => {
        const product = products.find((p) => p.id === item.productId);
        return (
          <div key={item.id} className="p-4 rounded-lg shadow flex justify-between items-center bg-gray-950">
            <div>
              <h3 className="text-lg font-semibold">{product?.name}</h3>
              <p>Quantity: {item.quantity}</p>
              <p>Total: ${(item.quantity * item.price).toFixed(2)}</p>
            </div>
            <button onClick={() => handleDelete(item.id)}>Remove</button>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
