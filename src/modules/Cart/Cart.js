import _ from 'lodash';
import React from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import './Cart.scss';
import CartItem from '../../components/CartItem/CartItem';
import isEmpty from './../../validation/is-empty';

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showCart: false,
    }
  }

  renderCart = () => {
    if (!isEmpty(this.props.products)) {
      return _.map(this.props.cart, (quantity, key) => {
        let productInfo = this.props.products[key];
        let { name, price_n, images } = productInfo;
        let product = { id: key, quantity, name, price_n, image: images[0] };
        return <CartItem
          key={key}
          product={product}
          removeProduct={this.props.removeProduct}
        />
      })
    }
    return false;
  }

  calculatePrice = () => {
    if (!isEmpty(this.props.products)) {
      let total = 0;
      _.map(this.props.cart, (quantity, key) => {
        total += quantity * parseInt(this.props.products[key].price_n, 10);
      });
      return total;
    }
  }

  render() {
    return (
      <div className={cn("header-cart")}>
        <label><i className={cn("cart-icon")} onClick={() => this.setState({ showCart: !this.state.showCart })}></i></label>
        <div className={cn("header-cart-container", { 'show-cart': this.state.showCart })} id="cart">
          {
            !isEmpty(this.props.cart) ?
              <>
                <ul className={cn("header-cart--item")}>
                  {this.props.products ? this.renderCart() : null}
                </ul>
                <div className={cn("header-cart-total")}>
                  <span>Tổng số</span><span className={cn("total-price")}>{this.calculatePrice()}đ</span>
                </div>
                <Link className={cn("btn btn-buy btn--color-black")} to="/cart">Giỏ hàng</Link>
              </>
              :
              <p>Không có sản phẩm nào</p>
          }
        </div>
      </div>
    )
  }
}

export default Cart;
