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
            }

        }
    }
    render() {
        return (
            <AdminLayout>
                <FormField

                    id={'date'},
formdata={this.state.formdata.date}
change={(element) => this.updateForm(element)}

                />
            </AdminLayout>
        );
    }
}

export default AddEditMatch;