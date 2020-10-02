import React from 'react';
import { Route, Redirect } from 'react-router-dom'
const PrivateRoutes = ({
    user,
    component: Comp,
    ...rest
}) => {
    return <Route  {...rest} />
};

export default PrivateRoutes;