import React from 'react';

const FormField = ({ formData, id }) => {

    const renderTemplate = () => {

        let formTemplate = null;

        switch (formData.element) {
            case ('input'):
                formTemplate = (
                    <div>
                        INPUT
                    </div>
                )
                break;
            default:



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