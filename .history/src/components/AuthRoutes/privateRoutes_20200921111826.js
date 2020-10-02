import React from 'react';

const PrivateRoutes = ({
    user,
    component: Comp,
    ...rest
}) => {
    return (
        <div>
            {user}
        </div>
    );
};

export default PrivateRoutes;