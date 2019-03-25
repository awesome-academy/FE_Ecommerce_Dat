import React from 'react';
import cn from 'classnames';
import './InputField.scss';

const InputField = ({ name, label, type, id, value, placeholder, onChange, style, error, }) => {
  return (
    <div className={cn("form-group", { 'is-invalid': error })}>
      {label && <label>{label}</label>}
      <input
        name={name}
        type={type}
        className="form-control"
        id={id}
        defaultValue={value}
        onChange={onChange}
        placeholder={placeholder}
        style={style}
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  )
}

export default InputField;
