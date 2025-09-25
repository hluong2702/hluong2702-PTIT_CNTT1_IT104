import { createBrowserRouter } from "react-router-dom";
import HomePage from "../components/Bai8/HomePage";
import Login from "../components/Bai8/Login";
import Bai1 from "../components/Bai1";
import Bai2 from "../components/Bai2";
import Bai3 from "../components/Bai3";
import Bai4 from "../components/Bai4";
import Bai5 from "../components/Bai5";
import Bai6 from "../components/Bai6";
import Bai7 from "../components/Bai7";
export const index = createBrowserRouter([
  {
    path: "/Homepage",
    element: <HomePage />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/Bai1",
    element: <Bai1 />,
  },
  {
    path: "/Bai2",
    element: <Bai2 />,
  },
  {
    path: "/Bai3",
    element: <Bai3 />,
  },
  {
    path: "/Bai4",
    element: <Bai4 />,
  },
  {
    path: "/Bai5",
    element: <Bai5 />,
  },
  {
    path: "/Bai6",
    element: <Bai6 />,
  },
  {
    path: "/Bai7",
    element: <Bai7 />,
  },
]);
