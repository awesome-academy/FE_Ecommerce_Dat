import React from 'react';
import cn from 'classnames';
import './InputSelect.scss';

export default ({label, onChange, value, data, error, name, defaultValue}) => {
  return (
    <div className={cn('modal-control')}>
      <div className="form-group">
        <label>{label}</label>
        <select name={name} onChange={onChange} className={cn("form-control")} value={value || defaultValue}>
          <option value="-1">-------- Chọn --------</option>)
                {_.map(data, (category, key) =>
            <option value={key} key={key}>{category.name || category}</option>)
          }
        </select>
      </div>
      {error &&
        <div className={cn('error')}>
          <div className={cn('error__text')} style={{ color: 'red' }}>{error}</div>
        </div>}
    </div>
  )
}
