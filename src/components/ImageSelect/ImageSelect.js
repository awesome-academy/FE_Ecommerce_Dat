import React from 'react';
import cn from 'classnames';

export default ({ label, error, onChange, images, onRemove}) => {
  return (
    <div className={cn('modal-control')}>
      <div className="form-group">
        <label>{label}</label>
        <div>
          <input className={cn('form-control')} onChange={onChange} type="file" id="file" accept=".jpg,.jpeg,.png" />
          {error &&
            <div className={cn('error')}>
              <div className={cn('error__text')} style={{ color: 'red' }}>{error}</div>
            </div>}
        </div>
        {images && <div className={cn('images-editing')}>
          {
            images.map(image => image.trim()).map((image, id) => {
              return (
                <div key={id} className={cn('image-item')}>
                  <img className={cn('imageThumnail')} alt="" src={image} onClick={() => this.setState({ isOpenThumbnail: true })} />
                  <div className={cn('btn-remove')} onClick={() => {
                    onRemove(id);
                  }}><img src={require('../../assets/images/icon-delete.svg')} />
                  </div>
                </div>);
            })
          }
        </div>
        }
      </div>
    </div>
  )
}
