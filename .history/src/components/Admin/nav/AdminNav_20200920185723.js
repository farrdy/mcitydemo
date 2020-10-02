import React from 'react';
import { Link } from 'react-router-dom'

const AdminNav = () => {

    const renderItems = () => {
        const links = [
            {
                title: 'Matches',
                linkTo: '/admin_matches'
            },
            {
                title: 'Add Match',
                linkTo: '/admin_matches/add_match'
            },
            {
                title: 'Players',
                linkTo: '/admin_players/'
            }
            {
                title: 'Add Players',
                linkTo: '/admin_players/add_players'
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