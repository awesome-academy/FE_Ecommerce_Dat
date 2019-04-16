import _ from 'lodash';
import isEmpty from '../../validation/is-empty';
import React from 'react';
import Header from '../../modules/Header/Navbar';
import Footer from '../../modules/Footer';
import './Cart.scss';
import CartItem from './CartItem';
import * as ROUTES from '../../constants/routes';
import { toastr } from 'react-redux-toastr';

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: {}
    }
  }

  componentDidMount() {
    if (isEmpty(this.props.products)) {
      this.props.productActions.fetchAllProducts();
    }
  }

  static getDerivedStateFromProps(props, state) {
    if (props.cart !== state.cart) {
      return {
        cart: props.cart,
      };
    }
    return null;
  }

  handleKeyDown = (id, e) => {
    const { value } = e.target;
    if (e.key === 'Enter') {
      this.props.cartActions.addToCart({id, quantity: parseInt(value, 10), isDirect: true})
    }
  }

  renderCartItems = () => {
    if (!isEmpty(this.props.products)) {
      let { cart } = this.state;
      return _.map(cart, (quantity, key) => {
        let productInfo = this.props.products[key];
        let { name, price_n, images } = productInfo;
        let product = { id: key, quantity, name, price_n, image: images[0] };
        return <CartItem
          key={key}
          id={key}
          product={product}
          handleKeyDown={this.handleKeyDown}
        />
      });
    }
  }

  render() {
    const { auth, history } = this.props;
    return (
      <>
        <Header />
        <div className="cart">
          <div className="container">
            <div className="container-title">
              <h3>Giỏ hàng</h3>
            </div>
            <div className="cart-content">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Ảnh</th>
                    <th scope="col">Tên sản phẩm</th>
                    <th scope="col">Giá</th>
                    <th scope="col">Số lượng</th>
                    <th scope="col">Tổng số</th>
                    <th scope="col">Xóa</th>
                  </tr>
                </thead>
                <tbody>
                  {this.renderCartItems()}
                </tbody>
              </table>
              <div className="action">
                <a className="btn btn-primary"
                  onClick={() => {
                    if (!auth.isAuthenticated && isEmpty(auth.user)) {
                      history.push(ROUTES.LOGIN)
                    } else {
                      history.push(ROUTES.CHECKOUT)
                    }
                  }}
                >Tiếp tục mua hàng</a>
                <a className="btn btn-primary">Xóa</a>
                <a className="btn btn-primary btn-update">Cập nhật</a>
              </div>
            </div>
          </div>
          <div className="clearfix"></div>
        </div>
        <Footer />
      </>
    )
  }
}

export default Cart;
