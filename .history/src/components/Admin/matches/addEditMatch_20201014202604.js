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
        teams: [],
        formdata: {

            date: {
                element: 'input',
                value: '',
                config: {
                    label: "Event Date",
                    name: 'date_input',
                    type: 'date'

                },
                validation: {
                    required: true,
                    email: true

                },
                valid: false,
                validationMessage: '',
                showLabel: true
            },
            password: {
                element: 'input',
                value: '',
                config: {
                    name: 'password_input',
                    type: 'password',
                    placeholder: 'Enter your password'
                },
                validation: {
                    required: true

                },
                valid: false,
                validationMessage: ''

            }
        }
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