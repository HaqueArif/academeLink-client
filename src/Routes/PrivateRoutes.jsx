
import { Navigate, useLocation } from "react-router-dom";
import loadingGif from '../assets/loading.gif'
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const PrivateRoutes = ({children}) => {

    const {user, loading} = useContext(AuthContext)
    const location = useLocation();
    if(loading){
        return <div className='min-h-screen flex justify-center items-center'>
            <img src={loadingGif} alt="" />
        </div>
    }

    if(user){
        return children;
    }

     return (
        <Navigate to="/login" state={{from: location}} replace></Navigate>
    );
};

export default PrivateRoutes;