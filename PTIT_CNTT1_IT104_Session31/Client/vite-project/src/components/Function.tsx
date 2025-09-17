import React, { useEffect, useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.min.js";
import AddModal from "./AddModal.tsx";
import axios from "axios";
export default function Function() {
  const [posts, setPost] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/posts")
      .then((res) => setPost(res.data))
      .catch(() => alert("Không lấy được dữ liệu"));
  }, []);
  const handleAdd = () => {
    const newPost = {
      title: `${(document.querySelector(".title") as HTMLInputElement).value}`,
      image: `${(document.querySelector(".image") as HTMLInputElement).value}`,
      date: `${(document.querySelector(".date") as HTMLInputElement).value}`,
      status: `${
        (document.querySelector(".status") as HTMLInputElement).value
      }`,
    };
    axios
      .post("http://localhost:3000/posts", newPost)
      .then(() => {alert("Thêm thành công")
        return axios.get("http://localhost:3000/posts")
      })
      .then((res) => setPost(res.data))
      .catch(() => alert("Thêm thất bại"));
  };
  return (
    <div className="container d-flex flex-column gap-4">
      <div className="d-flex justify-content-between">
        <div className="d-flex gap-3 w-50">
          <input
            type="text"
            placeholder="Nhập từ khóa tìm kiếm"
            className="p-2 find rounded-3 border border-secondary-subtle"
          />
          <select className="rounded p-2 border border-secondary-subtle">
            <option>Lọc bài viết</option>
          </select>
        </div>
        <div>
          <button
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            Thêm mới bài viết
          </button>
        </div>
      </div>
      <div className="table">
        <table className="table table-bordered">
          <thead className="table-secondary">
            <tr>
              <th scope="col" className="firstRow">
                STT
              </th>
              <th scope="col">Tiêu đề</th>
              <th scope="col">Hình ảnh</th>
              <th scope="col">Ngày viết</th>
              <th scope="col">Trạng thái</th>
              <th scope="col">Chức năng</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr>
                <td scope="row" className="firstRow">
                  {post.id}
                </td>
                <td>{post.title}</td>
                <td className="text-center">
                  <img
                    src={`${post.image}`}
                    width="40px"
                    height="40px"
                    className="rounded-circle border-secondary"
                  />
                </td>
                <td>{post.date}</td>
                <td>{post.status}</td>
                <td className="d-flex gap-3 justify-content-evenly">
                  <button className="btn btn-warning">Chặn</button>
                  <button className="btn btn-success">Sửa</button>
                  <button className="btn btn-danger">Xóa</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Add Modal */}
        <div
          className="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex={-1}
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="staticBackdropLabel">
                  Thêm bài viết mới
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body d-flex flex-column gap-3">
                <input
                  type="text"
                  className="title rounded-2 p-2"
                  placeholder="Nhập tiêu đề bài viết"
                />
                <input
                  type="text"
                  className="image rounded-2 p-2"
                  placeholder="Nhập địa chỉ ảnh"
                />
                <input
                  type="text"
                  className="date rounded-2 p-2"
                  placeholder="Nhập ngày"
                />
                <input
                  type="text"
                  className="status rounded-2 p-2"
                  placeholder="Nhập trạng thái"
                />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Đóng
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleAdd}
                  data-bs-dismiss="modal"
                >
                  Thêm
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
