import React from 'react';
import cn from 'classnames';
import './CheckBoxItem.scss';

const CheckBoxItem = ({ children, className, label, checked, onChange, name,  ...rest }) => {
  const option = {
    className: cn('CheckBoxItem form-group', className),
    ...rest,
  };

  return (
    <div {...option}>
      <label className={cn('iconCheckbox')} >{label}
        <input onChange={onChange} id={name} name={name} type="checkbox" defaultChecked={checked} />
        <span className={cn('checkmark')} />
      </label>
    </div>);
};
export default CheckBoxItem;

