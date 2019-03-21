import React from 'react';
import './Detail.scss';
import ImageGallery from './ImageGalary';
import Summary from './Summary/Summary';
import Sidebar from './Sidebar';
import { toastr } from 'react-redux-toastr';
import ContentTabs from './ContentTabs';

class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1
    }
  }

  onChange = (e) => {
    e.preventDefault();
    var { name, value } = e.target;
    if (name === "quantity") {
      value = parseInt(value, 10);
    }
    if (name == "quantity" && value < 1) {
      toastr.info('Số lượng không hợp lệ', '');
      return;
    }
    this.setState({ [name]: value })
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
    } = this.props.product;
    const { addToCart, id, fetchDetail } = this.props;
    const { quantity } = this.state;
    return (
      <div className="content-container product-detail">
        <div className="row">
          <ImageGallery images={images} />
          <Summary
            id={id}
            name={name}
            branch={branch}
            price_o={price_o}
            price_n={price_n}
            color={color}
            size={size}
            quantity={quantity}
            onAddToCart={addToCart}
            onChange={this.onChange}
            fetchDetail={fetchDetail}
          />
        </div>
        <div className="main row">
          <ContentTabs
            features={features}
            information={information}
            id={id}
          />
          <Sidebar />
        </div>
      </div>
    )
  }
}

export default Detail;
