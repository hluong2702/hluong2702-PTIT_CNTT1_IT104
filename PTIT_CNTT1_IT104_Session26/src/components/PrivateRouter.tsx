import React from 'react'
import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRouter() {
    const [isAuth, setIsAuth] = useState(true);
    return isAuth ? <Outlet /> : <Navigate to="/login" />;
}
