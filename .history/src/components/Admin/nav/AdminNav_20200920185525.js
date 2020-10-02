import React from 'react';
import { Link } from 'react-router-dom'

const AdminNav = () => {

    const renderItems = () => {
        const links = [
            {
                title: 'Matches',
                linkTo: '/admin_matches'
            }
        ]

    }
    return (
        <div>
            {renderItems()}
        </div>
    );
};

export default AdminNav;