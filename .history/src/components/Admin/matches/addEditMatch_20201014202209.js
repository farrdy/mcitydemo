import React, { Component } from 'react';
import AdminLayout from '../../../Hoc/AdminLayout'
import FormField from '../../ui/formFields'
import { validate } from '../../ui/misc'

class AddEditMatch extends Component {

    state = {

        matchId: '',
        formType: '',
        formError: false,
        formSuccess: '',
        teams: []

    }
    render() {
        return (
            <AdminLayout>
                Add edit match
            </AdminLayout>
        );
    }
}

export default AddEditMatch;