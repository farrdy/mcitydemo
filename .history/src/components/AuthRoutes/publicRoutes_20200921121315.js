import React from 'react';

import { Route, Redirect } from 'react-router-dom'
const PublicRoutes = ({
    user,
    component: Comp,
    ...rest
}) => {
    return <Route  {...rest} component={(props) => (

        rest.restricted ? (user ? <Redirect to="/dashbooard" /> : <Comp  {...props} user={user} />)
        

    )} />
};

export default PublicRoutes;