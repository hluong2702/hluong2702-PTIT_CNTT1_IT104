import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const accountLocal = JSON.parse(localStorage.getItem("account") || "[]");
const RegisterPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validate, setValidate] = useState(0);
  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.includes("@") || e.target.value.endsWith(".com")) {
      setEmail(e.target.value);
      setValidate(1);
    } else {
      alert("email lỗi");
      setValidate(0);
    }
  };
  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setValidate(1);
  };
  const handleConfirmPassword = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.value == password) {
      setValidate(1);
    }else{
      setValidate(0);
    }
    
  };
  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (
      validate === 1
    ) {
      alert("đăng kí thành công");
      const newAccount = {email: email, password: password};
      accountLocal.push(newAccount)
      localStorage.setItem("account", JSON.stringify(accountLocal))
      navigate("/login");
    }
  };
  return (
    <>
      <main className="container">
        <div className="login-container">
          <h2>Create account</h2>
          <form>
            <div className="form-group">
              <label htmlFor="username">Your email</label>
              <input
                type="text"
                id="username"
                placeholder="name@company.com"
                onChange={handleEmail}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="******"
                onChange={handlePassword}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Confirm Password</label>
              <input
                type="password"
                id="password"
                placeholder="******"
                onChange={handleConfirmPassword}
              />
            </div>
            <div>
              <button type="submit" onClick={handleSubmit}>
                Create an account
              </button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

export default RegisterPage;
