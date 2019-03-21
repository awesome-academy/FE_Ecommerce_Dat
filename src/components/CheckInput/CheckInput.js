import React from 'react';
import cn from 'classnames';

const CheckInput = ({ name, value, label, type, id, checked, onChange, error }) => {
  return (
    <div className={cn("form-group")}>
      <input
        className={cn("form-check-input")}
        type={type}
        name={name}
        value={value}
        checked={checked}
        id={id}
        onChange={onChange}
      />
      <label>{label}</label>
      {error && <div className={cn("invalid-feedback")}>{error}</div>}
    </div>
  )
}

export default CheckInput;
