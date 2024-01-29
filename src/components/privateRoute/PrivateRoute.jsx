import { useSelector } from "react-redux";
import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoute = () => {
    const isAuthenticated = useSelector(state => state.isAuthenticated);

    return (
        <div>
            {isAuthenticated ? <Outlet /> : <Navigate to="/" />}
        </div>
    )
};


export default PrivateRoute;



