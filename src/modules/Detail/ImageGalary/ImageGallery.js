import _ from 'lodash';
import React from 'react';

export default ({ images }) => {
  return (
    <div className="product-image col-md-6">
      <div className="image-galery">
        {images.length > 1 ? <a href="#"><i className="icon above-arrow"></i></a> : null}

        {
          _.map(images, (image, index) => {
            if (index === 0) return
            return (
              <a href="#"><img src={image} /></a>
            )
          })
        }
        {images.length > 1 ? <a href="#"><i className="icon below-arrow"></i></a> : null}
      </div>
      <div className="preview-image">
        <img src={images[0]} />
      </div>
    </div>
  )
}
