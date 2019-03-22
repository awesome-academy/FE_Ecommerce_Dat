import React from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import './Cart.scss';

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showCart: false
    }
  }
  render() {
    return (
      <div className={cn("header-cart")}>
        <label><i className={cn("cart-icon")} onClick={() => this.setState({ showCart: !this.state.showCart })}></i></label>
        <div className={cn("header-cart-container", { 'show-cart': this.state.showCart })} id="cart">
          <ul className={cn("header-cart--item")}>
            <li>
              <img className={cn("product-image")} src={require('../../assets/images/cart_thumb.jpg')} alt="Áo sơ mi nam" />
              <div className={cn("name-price")}>
                <h6 className={cn("product-name")}>Áo sơ mi nam</h6>
                <p className={cn("product-price")}>120.000đ</p>
              </div><Link to="#"><i className={cn("icon-remove")}></i></Link>
            </li>
          </ul>
          <div className={cn("header-cart-total")}>
            <span>Tổng số</span><span className={cn("total-price")}>240.000đ</span>
          </div>
          <Link className={cn("btn btn-buy btn--color-black")} to="/cart">Giỏ hàng</Link>
        </div>
      </div>
    )
  }
}

export default Cart;
