import React, { useState } from "react";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";

const Employees = ({ employees, handleEdit, handleDelete, renderForm }) => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="space-y-4 p-4 text-gray-100">
      <h2 className="text-2xl font-bold">Quản lý nhân viên</h2>

      {/* Nút Thêm nhân viên */}
      <button
        onClick={() => setShowForm(!showForm)}
        className="flex items-center bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        <FaPlus className="mr-2" />
        Thêm nhân viên
      </button>

      {/* Hiển thị form */}
      {showForm && renderForm()}

      {/* Bảng nhân viên */}
      <div className="grid grid-cols-6 gap-4 font-bold bg-gray-200 p-4 text-black">
        <div>Họ tên</div>
        <div>Email</div>
        <div>Chức vụ</div>
        <div>Số điện thoại</div>
        <div className="text-right col-span-2">Hành động</div>
      </div>

      {/* Danh sách nhân viên */}
      {employees.map((employee) => (
        <div key={employee.id} className="grid grid-cols-6 gap-4 p-4 border-b items-center">
          <div>{employee.name}</div>
          <div>{employee.email}</div>
          <div>{employee.position}</div>
          <div>{employee.phone}</div>
          <div className="flex justify-end space-x-2 col-span-2">
            <button
              onClick={() => handleEdit(employee)}
              className="text-blue-500 hover:text-blue-700"
            >
              <FaEdit />
            </button>
            <button
              onClick={() => handleDelete(employee.id)}
              className="text-red-500 hover:text-red-700"
            >
              <FaTrash />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Employees;
