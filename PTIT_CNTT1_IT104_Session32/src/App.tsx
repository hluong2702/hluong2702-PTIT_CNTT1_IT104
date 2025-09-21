import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./components/Bai7,8/Register";
import Login from "./components/Bai7,8/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
