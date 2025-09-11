import { useState } from "react";
import { useNavigate } from "react-router-dom";
type Account = {
  email: string;
  password: string;
};
const LoginPage = () => {
  const accountLocal: Account[] = JSON.parse(
    localStorage.getItem("account") || "[]"
  );
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const handleSumit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if(accountLocal.find(account => account.email === email && account.password === password)){
      navigate("/home-page");
    }
  }
  return (
    <>
      <main className="container">
        <div className="login-container">
          <h2>Login account</h2>
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
            <div>
              <button type="submit" onClick={handleSumit}>Login an account</button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

export default LoginPage;
