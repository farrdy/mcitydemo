import React, { Component } from 'react';
import AdminLayout from '../../../Hoc/AdminLayout';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';

import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';
import { firebaseMatches } from '../../../firebase';
import { firebaseLooper, reverseArray } from '../../ui/misc';

class AdminMatches extends Component {

    state = {
        isLoading: true,
        matches: []
    }

    componentDidMount() {

    }

    render() {
        return (
            <AdminLayout>
                <div className="admin_progress">
                    {
                        this.state.isLoading ? <CircularProgress
                            thickness={7}
                            style={{ color: 'secondary' }}
                        /> : ''
                    }

                </div>
            </AdminLayout>
        );
    }
}

export default AdminMatches;