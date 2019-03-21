import _ from 'lodash';
import React from 'react';
import Lightbox from 'lightbox-react';
import 'lightbox-react/style.css'; // This only needs to be imported once in your app

class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenThumbnail: false,
      selected: 0
    }
  }

  render() {
    const { images } = this.props;
    const { isOpenThumbnail, selected } = this.state;
    return (
      <div className="product-image col-md-6">
        <div className="image-galery">
          {images.length < -1 ? <a><i className="icon above-arrow"></i></a> : null}
          {
            images.map((image, index) => {
              if (index === 0) return
              return (
                <img key={index} src={image} onClick={() => this.setState({ isOpenThumbnail: true, selected: index })} />
              )
            })
          }
          {images.length < -1 ? <a><i className="icon below-arrow"></i></a> : null}
        </div>
        <div className="preview-image">
          <img src={images[0]} onClick={() => this.setState({ isOpenThumbnail: true, selected: 0 })}/>
        </div>
        {isOpenThumbnail && images && (
          <Lightbox
            mainSrc={images[selected]}
            onCloseRequest={() => this.setState({ isOpenThumbnail: false })}
          />
        )}
      </div>
    )
  }
}

export default ImageGallery;
