import React, { useContext } from 'react';
import { Navigate, Route } from 'react-router-dom';
import { Context } from '../../App';


const PrivateRoute = ({children}) => {

    const [loggedInUser,setLoggedInUser]=useContext(Context);
    //console.log('email -',loggedInUser.email);

    return (
        loggedInUser.email ? children : <Navigate to="/login" replace />

    )

};

export default PrivateRoute;