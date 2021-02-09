import React from 'react'
import './index.scss'

const FormInput =({label, handleChange, ...otherProps})=> {


    return (
        <div className="form">
            {label && (
                <label>
                    {label}
                </label>
            )}
            <input className="formInput" onChange={handleChange} {...otherProps} />
        </div>
    );

}

export default FormInput