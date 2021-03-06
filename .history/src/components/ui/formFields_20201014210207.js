import React from 'react';

const FormField = ({ formdata, id, change }) => {

    const showError = () => {

        let errorMessage = <div className="error_label">

            {

                formdata.validation && !formdata.valid ? formdata.validationMessage : null
            }
        </div>

        return errorMessage;

    }

    const renderTemplate = () => {

        let formTemplate = null;

        switch (formdata.element) {
            case ('input'):
                formTemplate = (

                    <div>

                        <div className="label_inputs">
                            {formdata.showLabel ? formdata.config.label : null}
                        </div>
                        <input
                            {...formdata.config}
                            value={formdata.value}
                            onChange={(event) => change({ event, id })}
                        />
                        {showError()}

                    </div>
                )
                break;

            case ('select'):
                formTemplate = (

                    <div>

                        <div className="label_inputs">
                            {formdata.showLabel ? formdata.config.label : null}
                        </div>
                        <select
                            value={formdata.value}
                            onChange={(event) => change({ event, id })}
                        >
                            <option value="">Select one</option>
                            {
                                formdata.config.option.map((item) => (
                                    <option key={item.key} value={item.key}>
                                        {item.value}
                                    </option>
                                ))

                            }
                        </select>

                    </div>
                )
                break;
            default:
                formTemplate = null;

        }
        return formTemplate;
    }

    return (
        <div>
            {renderTemplate()}
        </div>
    );
};

export default FormField;