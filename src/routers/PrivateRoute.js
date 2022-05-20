import React from 'react';
// import PropTypes from 'prop-types';

import { Route, Navigate } from 'react-router-dom';


export const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => {
    

    return (
        <Route { ...rest }
            component={ (props) => (
                ( isAuthenticated === true )
                    ? ( <Component { ...props } /> )
                    : ( <Navigate to="/" /> )
            )}
        
        />
    )
}

// PrivateRoute.propTypes = {
//     isAuthenticated: PropTypes.bool.isRequired,
//     component: PropTypes.func.isRequired
// }
