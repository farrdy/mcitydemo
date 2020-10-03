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

        firebaseMatches.once('value').then(snapshot => {
            const matches = firebaseLooper(snapshot);
            this.setState({
                isLoading: false,
                matches: reverseArray(matches)
            })
        })


    }

    render() {
        console.log(this.state.matches);

        return (
            <AdminLayout>
                <div>
                    <Paper>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>
                                        Date
                </TableCell>
                                    <TableCell>
                                        Match
                </TableCell>
                                    <TableCell>
                                        Result
                </TableCell>
                                    <TableCell>
                                        Final
                </TableCell>
                                </TableRow>
                            </TableHead>
                        </Table>
                        <TableBody>
                            {
                                this.state.matches ? this.state.matches.map((match, i) => (

                            )) : null}
                        </TableBody>
                    </Paper>

                </div>
                <div className="admin_progress">

                    {
                        this.state.isLoading ? <CircularProgress
                            thickness={7}
                            style={{ color: 'secondary', size: '3rem' }}
                        /> : ''
                    }

                </div>
            </AdminLayout>
        );
    }
}

export default AdminMatches;