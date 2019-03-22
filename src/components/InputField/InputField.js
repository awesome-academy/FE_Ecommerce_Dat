import React from 'react';

const InputField = ({ label, type, id, value, placeholder, inputAction, style }) => {
    return (
        <div className="form-group">
            { label && <label>{label}</label>}
            <input
                type={type}
                className="form-control"
                id={id}
                defaultValue={value}
                onChange={inputAction}
                placeholder={placeholder}
                style={style}
            />
        </div>
    )
}

export default InputField;