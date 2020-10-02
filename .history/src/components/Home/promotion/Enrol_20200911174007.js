import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
class Enrol extends Component {

    state = {
        formError: false,
        formSuccess: '',
        formData: {

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
            }
        }
    }
    render() {
        return (
            <Fade>
                <div>



                </div>
            </Fade>
        );
    }
}

export default Enrol;