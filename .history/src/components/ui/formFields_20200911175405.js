import React from 'react';

const FormField = ({ formData, id }) => {

    const renderTemplate = () => {

        switch (formData.element) {
            case ('input'):
                break;
            default:
                formTemplate = null


        }
    }

    return (
        <div>
            {renderTemplate()}
        </div>
    );
};

export default FormField;