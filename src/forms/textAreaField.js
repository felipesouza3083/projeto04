import React from 'react';

export const textAreaField = ({
    input,
    label,
    placeholder,
    meta: {
        touched,
        error
    }
}) => (
        <div className="form-group">
            <label>{label}</label>
            <textarea {...input}
                autoComplete="off"
                className="form-control"
                placeholder={placeholder}>
            </textarea>
            <span className="text-danger">
                {
                    touched && (error && <span>{error}</span>)
                }
            </span>
        </div>
    )