import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import FormField from '../../ui/formFields'
import { validate } from '../../ui/misc'
import { firebasePromotions } from '../../../firebase'
class Enrol extends Component {

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
            }
        }
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
            // console.log(dataToSubmit)
            firebasePromotions.orderByChild('email').equalTo(dataToSubmit.email).once('value').then(
                (snapshot) => {
                    if (snapshot.val() === null) {
                        firebasePromotions.push(dataToSubmit);
                        this.resetFormSuccess(true)
                    }
                    else {
                        this.resetFormSuccess(false)

                    }
                })

            // this.resetFormSuccess()
        }
        else {
            this.setState({
                formError: true
            })
        }
    }

    resetFormSuccess = (type) => {
        const newFormdata = { ...this.state.formdata }
        for (let key in newFormdata) {
            newFormdata[key].value = '';
            newFormdata[key].valid = false;
            newFormdata[key].validationMessage = '';
        }

        this.setState({
            formError: false,
            formdata: newFormdata,
            formSuccess: type ? 'Congratulations' : 'Already on the database'
        })

        this.successMessage();

    }

    successMessage = () => {
        setTimeout(() => {
            this.setState({
                formSuccess: ''
            })
        }, 2000)

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
    render() {
        return (
            <Fade>
                <div className="enroll_wrapper">
                    <form onSubmit={(event) => this.submitForm(event)}>

                        <div className="enroll_title">
                            Enter your email
                        </div>

                        <div className="enroll_input">
                            <FormField
                                id={'email'}
                                formdata={this.state.formdata.email}
                                change={(element) => this.updateForm(element)}
                            />
                            {this.state.formError ? <div className="error_label">Something went wrong, try again</div> : null}

                            <div className="success_label">{this.state.formSuccess}</div>
                            <button onClick={(event) => this.submitForm(event)}>Enrol</button>

                            <div className="enroll_discl">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                Expedita quas nihil, distinctio nisi maxime voluptas est modi
                                consequuntur incidunt tenetur.

                            </div>
                        </div>
                    </form>
                </div>

            </Fade>
        );
    }
}

export default Enrol;