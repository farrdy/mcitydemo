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

    updateForm = (element) => {
        const newFormdata = { ...this.state.formdata }
        const newElement = { ...newFormdata[element.id] }
        newElement.value = element.event.target.value;

        let valiData = validate(newElement);
        newElement.valid = valiData[0];
        newElement.validationMessage = valiData[1]
        console.log(newFormdata);
        newFormdata[element.id] = newElement;

        this.setState({
            formError: false,
            formdata: newFormdata
        })
    }

    submitForm = (event) => {
        event.preventDefault();
        let dataToSubmit = {};
        let formIsValid = true;

        for (let key in this.state.formdata) {
            dataToSubmit[key] = this.state.formdata[key].value;
            formIsValid = this.state.formdata[key].valid && formIsValid;

        }
        if (formIsValid) {
            console.log(dataToSubmit)


            // this.resetFormSuccess()
        }
        else {
            this.setState({
                formError: true
            })
        }
    }
    render() {
        return (
            <div className="container">
                <div className="signin_wrapper" style={{ margin: '100px' }}>
                    <form onSubmit={(event) => this.submitForm(event)}>
                        <h2>Please login</h2>

                        <FormField
                            id={'email'}
                            formdata={this.state.formdata.email}
                            change={(element) => this.updateForm(element)}
                        />
                        <FormField
                            id={'password'}
                            formdata={this.state.formdata.password}
                            change={(element) => this.updateForm(element)}
                        />
                        <button onClick={(event) => this.submitForm(event)}>Login</button>

                    </form>
                </div>
            </div>
        );
    }
}

export default Signin;