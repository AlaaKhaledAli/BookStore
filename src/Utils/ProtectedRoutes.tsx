import { Navigate, Outlet } from "react-router-dom"
import { useSelector } from "react-redux";
import { selectAccessToken } from "../Modules/AuthModule/AuthApiSlice/AuthApiSlice";

const ProtectedRoutes=()=>{
 const token = useSelector(selectAccessToken);

    return token? <Outlet/> : <Navigate to='/Auth' replace/>
}

export default ProtectedRoutes;