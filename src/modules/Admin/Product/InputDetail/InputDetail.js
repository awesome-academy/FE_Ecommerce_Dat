import React from 'react';
import cn from 'classnames';
import InputField from '../../../../components/InputField';

export default ({label, type, name, value, onChange, error}) => {
  return (
    <div className={cn('modal-control')}>
      <InputField label={label} type={type} name={name} value={value} onChange={onChange} />
      {error &&
        <div className={cn('error')}>
          <div className={cn('error__text')} style={{ color: 'red' }}>{error}</div>
        </div>}
    </div>
  )
}
