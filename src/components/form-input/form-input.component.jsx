import React from 'react';

import './form-input.styles.scss';

// Whether the developer sends the label, it will load the label tag, otherwise it will be null

const FormInput = ({ handleChange, label, ...otherProps }) => (
    <div className = 'group'>
        <input 
            className = 'form-input' 
            onChange = { handleChange }
            { ...otherProps } 
        />
        {
            label ? (<label 
                        className = { `${ otherProps.value ? 'shrink' : '' } form-input-label `}>
                        { label }
                    </label>) : null
        }
    </div>
);

export default FormInput;