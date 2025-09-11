import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProductList from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetail";
import TaskList from "./pages/TaskList";
import TaskDetail from "./pages/TaskDetail";
import FindProduct from "./pages/FindProduct";
import BlogLayout from "./pages/BlogLayout";
import Posts from "./pages/Post";
import PostDetail from "./pages/PostDetail";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import NotFound from "./pages/NotFound"
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/productList" element={<ProductList />} />
        <Route path="/productDetail/:id" element={<ProductDetail />} />
        <Route path="/taskList" element={<TaskList />} />
        <Route path="/taskDetail/:taskId" element={<TaskDetail />} />
        <Route path="/findProduct" element={<FindProduct />} />
        <Route path="/blog" element={<BlogLayout />} />
        <Route path="posts" element={<Posts />} />
        <Route path="posts/:id" element={<PostDetail />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
