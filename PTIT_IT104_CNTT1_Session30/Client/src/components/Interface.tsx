import {useEffect, useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../style.css";
import "../../node_modules/bootstrap-icons/font/bootstrap-icons.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.min.js";
import axios from "axios";
export default function JobInterface() {
  const [all, setAll] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [pending, setPending] = useState(false);
  const [input, setInput] = useState("");
  const [inputOnFocus, setInputOnFocus] = useState("");
  const [jobs, setJob] = useState([]);
  const [index, setIndex] = useState(0);
  const [status, setStatus] = useState(false);
  useEffect(() => {
    axios.get("http://localhost:3000/jobs")
    .then((res) => setJob(res.data))
    .catch(() => alert("Không lấy được dữ liệu"))
  }, [])
  const handleClick = (
    typeButton: string,
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    if (typeButton === "all") {
      setAll(true);
      setCompleted(false);
      setPending(false);
    } else if (typeButton === "completed") {
      setAll(false);
      setCompleted(true);
      setPending(false);
    } else {
      setAll(false);
      setCompleted(false);
      setPending(true);
    }
  };
  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  const handleAdd = () => {
    if (input === "") {
      alert("Tên công việc không được để trống");
    } else {
      const newJob = { name: input };
      axios.post("http://localhost:3000/jobs", newJob)
      .then(() => alert("Thêm học sinh thành công"))
      .catch(() => alert("Thêm học sinh thất bại"))
      setInput("");
    }
  };
  const handleFixed = (e: React.MouseEvent<HTMLButtonElement>) => {
    const index = Number(e.currentTarget.getAttribute("data-id"));
    axios.get(`http://localhost:3000/jobs/${index}`)
    .then((res) => setInputOnFocus(res.data.name))
    console.log(inputOnFocus);
    
    setIndex(index);
  }
  const handleNewName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputOnFocus(e.target.value);
  };
  const handleChangeName = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const newJob = {name: inputOnFocus};
    axios.put(`http://localhost:3000/jobs/${index}`, newJob);
    const newArr = [...jobs];
    newArr[index - 1].name = inputOnFocus;
    setJob([...newArr]);
  }
  const handleStatus = (e: React.MouseEvent<HTMLInputElement>) => {
    const index = Number(e.currentTarget.getAttribute("data-id"));
    const total = document.querySelectorAll(".inputTypeCheckBox");
    const totalText = document.querySelectorAll(".text");
    total[index - 1].addEventListener("change", function(){
      if(status === false){
        totalText[index - 1].classList.add("active");
        setStatus(true);
      }else{
        totalText[index - 1].classList.remove("active");
        setStatus(false);
      }
    })
  }
  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    const index = Number(e.currentTarget.getAttribute("data-id"));
    axios.delete(`http://localhost:3000/jobs/${index}`)
    .then(() => alert("Xóa thành công"))
    .catch(()=> alert("Xóa thất bại"))
    jobs.splice(index - 1, 1);
    setJob([...jobs]);
    console.log(jobs);
    
  }
  return (
    <div className="border rounded shadow-md p-3 container w-50 d-flex flex-column gap-4">
      <div className="header">
        <h3>Quản lý công việc</h3>
      </div>
      <div className="d-flex flex-column border p-3 rounded shadow-lg gap-3 input">
        <input
          type="text"
          className="bg-white border border-secondary w-100 p-1 rounded"
          placeholder="Nhập tên công việc"
          value={input}
          onChange={handleName}
        />
        <button className="btn btn-primary" onClick={handleAdd}>
          Thêm công việc
        </button>
      </div>
      <div className="d-flex gap-3 justify-content-center border rounded p-3 shadow-lg">
        <button
          className={`btn border-secondary-subtle ${
            all === false ? "" : "btn btn-primary"
          }`}
          onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
            handleClick("all", e)
          }
        >
          Tất cả
        </button>
        <button
          className={`btn border-secondary-subtle ${
            completed === false ? "" : "btn btn-primary"
          }`}
          onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
            handleClick("completed", e)
          }
        >
          Hoàn thành
        </button>
        <button
          className={`btn border-secondary-subtle ${
            pending === false ? "" : "btn btn-primary"
          }`}
          onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
            handleClick("pending", e)
          }
        >
          Đang thực hiện
        </button>
      </div>
      <div className="d-flex flex-column gap-3">
        {jobs.map((job, index) => (
          <div className="d-flex justify-content-between align-items-center border rounded p-1 shadow-md">
            <div>
              <input type="checkbox" data-id={index + 1} className="inputTypeCheckBox" onClick={handleStatus}/>
              <span className="fs-6 text"> {job.name}</span>
            </div>
            <div>
              <button className="btn" data-id={index + 1} onClick={handleFixed}>
                <i
                  className="bi bi-tux text-warning"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                ></i>
              </button>
              <button className="btn" data-id={index + 1} onClick={handleDelete}>
                <i className="bi bi-trash-fill text-danger"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="d-flex justify-content-between">
        <button className="text-light btn btn-danger">
          Xóa công việc hoàn thành
        </button>
        <button className="text-light btn btn-danger">
          Xóa tất cả công việc
        </button>
      </div>
      {/* Modal */}
      <div>
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
                  Modal title
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body w-100">
                <input type="text" className="w-100 p-2 rounded" value={inputOnFocus} onChange={handleNewName}/>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Đóng
                </button>
                <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={handleChangeName}>
                  Cập nhật
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
