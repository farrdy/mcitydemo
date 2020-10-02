import React, { Component } from 'react';
import FormField from '../ui/formFields';
import { validate } from '../ui/misc';

class Signin extends Component {
    state = {
        formError: false,
        formSuccess: '',
        formdata: {

            email: {
                element: 'input',
                value: '',
                config: {
                    name: 'email_input',
                    type: 'email',
                    placeholder: 'Enter your email'
                },
                validation: {
                    required: true,
                    email: true
                },
                valid: false,
                validationMessage: ''
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
            <div className="container">
                <div className="signin_wrapper" style={{ margin: '100px' }}>
                    <form onSubmit={(event) => this.submitForm(event)}>
                        <h1>Please login</h1>
                    </form>
                </div>
            </div>
        );
    }
}

export default Signin;