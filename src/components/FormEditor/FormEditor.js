import React from 'react';
import cn from 'classnames';
import FroalaEditor from 'react-froala-wysiwyg';

export default ({ label, config, model, onModelChange, error }) => {
  return (
    <div className={cn('modal-control')}>
      <div className="form-group">
        <label>{label}</label>
        <FroalaEditor
          tag="textarea"
          config={config}
          model={model}
          onModelChange={onModelChange}
        />
        {error &&
          <div className={cn('error')}>
            <div className={cn('error__text')} style={{ color: 'red' }}>{error}</div>
          </div>}
      </div>
    </div>
  )
}
