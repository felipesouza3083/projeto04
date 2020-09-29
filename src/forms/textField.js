import React from 'react';

export const textField = ({
    input,
    label,
    type,
    placeholder,
    meta: {
        touched,
        error
    }
}) => (
        <div className="form-group">
            <label>{label}</label>
            <input type={type} {...input}
                autoComplete="off"
                className="form-control"
                placeholder={placeholder} />
            <span className="text-danger">
                {
                    touched && (error && <span>{error}</span>)
                }
            </span>
        </div>
    )