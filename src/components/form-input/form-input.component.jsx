import React from 'react';

import './form-input.styles.scss';

const FormInput = ({ handleChange, label, ...otherFormProps}) => (
    <div className="group">
        <input className="input" onChange={handleChange} {...otherFormProps} />
        {
            label ? 
            (<label className={`${props.value.length ? 'shrink' : ''} form-input-label`}>
                { label }
            </label>)
            : null
        }
    </div>
)

export default FormInput;