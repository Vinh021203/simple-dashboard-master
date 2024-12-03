import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addBook } from "../api/bookService"; // Giả sử bạn đã import hàm addBook đúng
import { Toast } from "react-bootstrap";

const AddBookForm = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [productCode, setProductCode] = useState("");
  const [message, setMessage] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [toastType, setToastType] = useState(""); // success or error
  const navigate = useNavigate();

  // Xử lý sự kiện submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Kiểm tra xem các trường có bị bỏ trống không
    if (!title || !author || !price || !category || !image || !productCode) {
      setMessage("Vui lòng điền đầy đủ thông tin!");
      setToastType("error");
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000); // Hiển thị trong 3 giây
      return; // Dừng lại nếu có trường thiếu
    }

    const bookData = { title, author, price, category, image, productCode };

    try {
      // Gửi thông tin sách tới API
      await addBook(bookData);
      setMessage(`Sách "${title}" đã được thêm thành công!`);
      setToastType("success");
      setShowToast(true);

      setTimeout(() => {
        setShowToast(false);
        navigate("/"); // Điều hướng về trang Dashboard sau khi thêm sách
      }, 3000);
    } catch (error) {
      console.error("Error adding book:", error);
      setMessage("Lỗi khi thêm sách");
      setToastType("error");
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000); // Hiển thị trong 3 giây
    }
  };

  // Xử lý sự kiện thay đổi input
  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "title":
        setTitle(value);
        break;
      case "author":
        setAuthor(value);
        break;
      case "price":
        setPrice(value);
        break;
      case "category":
        setCategory(value);
        break;
      case "image":
        setImage(value);
        break;
      case "productCode":
        setProductCode(value);
        break;
      default:
        break;
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Thêm Sách Mới</h1>
      <form onSubmit={handleSubmit}>
        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">Tên Sách</label>
            <input type="text" className="form-control" name="title" value={title} onChange={handleChange} />
          </div>
          <div className="col-md-6">
            <label className="form-label">Tác Giả</label>
            <input type="text" className="form-control" name="author" value={author} onChange={handleChange} />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">Giá Cả</label>
            <input type="number" className="form-control" name="price" value={price} onChange={handleChange} />
          </div>
          <div className="col-md-6">
            <label className="form-label">Thể Loại</label>
            <input type="text" className="form-control" name="category" value={category} onChange={handleChange} />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">Hình Ảnh</label>
            <input type="text" className="form-control" name="image" value={image} onChange={handleChange} />
          </div>
          <div className="col-md-6">
            <label className="form-label">Mã Sản Phẩm</label>
            <input
              type="text"
              className="form-control"
              name="productCode"
              value={productCode}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="d-flex justify-content-between">
          <button type="submit" className="btn btn-success">
            Thêm Sách
          </button>{" "}
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => navigate("/")} // Điều hướng về trang Dashboard khi cancel
          >
            Hủy
          </button>
        </div>
      </form>

      {/* Toast thông báo */}
      <Toast
        show={showToast}
        onClose={() => setShowToast(false)}
        className={`position-fixed bottom-0 end-0 m-3 custom-toast ${
          toastType === "error" ? "bg-danger text-white" : "bg-success text-white"
        }`}
      >
        <Toast.Body>{message}</Toast.Body>
      </Toast>
    </div>
  );
};

export default AddBookForm;
