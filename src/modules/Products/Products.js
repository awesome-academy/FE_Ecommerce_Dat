import _ from 'lodash';
import React from 'react';
import cn from 'classnames';
import './Products.scss';
import ProductItem from "../../components/ProductItem";
import ProductLoading from '../../components/ContentLoading/ProductLoading';

class Products extends React.Component {
  constructor(props) {
    super(props);
  }

  contentLoadingFake = () => {
    let i;
    let result = [];
    for (i = 0; i < 4; i++) {
      result.push(<ProductLoading key={i} />)
    }
    return result;
  }

  renderProducts = () => {
    return _.map(this.props.products, (product, key) => {
      return product.status && <ProductItem
        key={key}
        product={product}
        id={key}
        addToCart={this.props.addToCart}
      />
    })
  }
  render() {
    return (
      <div className={cn("products")}>
        <div className={cn("container products-container")}>
          <ul className={cn("product-tabs")}>
            <li><a href="#new">Sản phẩm mới</a></li>
            <li><a className={cn("active")} href="#hot">Sản phẩm bán chạy</a></li>
            <li><a href="#special">Sản phẩm đặc biệt</a></li>
          </ul>
          <div className={cn("title-line")}>
            <hr />
            <div className={cn("more-slash")}></div>
            <hr />
          </div>
          <div className={cn("product-menu")}>
            <ul>

            </ul>
          </div>
          <div className="product-list-wrapper">
            <div className="product-list-container">
              <div className="product-list">
                {!this.props.fetchingProducts ? this.renderProducts() : this.contentLoadingFake()}
              </div>
            </div>
            <a className="icon previous-icon arrow-icon arrow-icon--prev"></a>
            <a className="icon next-icon arrow-icon arrow-icon--next"></a>
          </div>
        </div>
      </div>
    )
  }
}

export default Products;
