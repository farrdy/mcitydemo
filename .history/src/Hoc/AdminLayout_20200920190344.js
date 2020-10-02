import React from 'react';
import AdminNav from '../components/Admin/nav/AdminNav'
const AdminLayout = (props) => {
    return (
        <div className="admin_container">

            <div className="admin_left_nav">
                Nav
        </div>
            <div className="admin_right">

                {props.children}
            </div>

        </div>
    );
};

export default AdminLayout;