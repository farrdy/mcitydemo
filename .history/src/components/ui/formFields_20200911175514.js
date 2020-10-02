import React from 'react';

const FormField = ({ formData, id }) => {

    const renderTemplate = () => {

        const formTemplate = null;

        switch (formData.element) {
            case ('input'):
                formTemplate = (
                    <div>
                        INPUT
                    </div>
                )
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