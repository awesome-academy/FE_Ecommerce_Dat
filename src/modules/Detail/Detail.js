import React from 'react';
import './Detail.scss';
import ImageGallery from './ImageGalary';
import Summary from './Summary/Summary';
import Tabs from './Tabs/Tabs';
import Sidebar from './Sidebar';

class Detail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      name,
      color,
      size,
      images,
      features,
      information,
      price_o,
      price_n,
      branch,
      addToCart
     } = this.props.product;
    return (
      <div className="content-container product-detail">
        <div className="row">
          <ImageGallery images={images} />
          <Summary
            name={name}
            branch={branch}
            price_o={price_o}
            price_n={price_n}
            color={color}
            size={size}
            onAddToCart={addToCart}
          />
        </div>
        <div className="main row">
          <Tabs />
          <Sidebar />
        </div>
      </div>
    )
  }
}

export default Detail;
