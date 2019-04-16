import _ from 'lodash';
import React from 'react';
import * as address from '../../../constants/address.json';
import isEmpty from '../../../validation/is-empty';
import { Link } from 'react-router-dom';
import CheckInput from '../../../components/CheckInput';
import * as routes from '../../../constants/routes';

class PaymentConfirm extends React.Component {

  calculatePrice = () => {
    if (!isEmpty(this.props.products)) {
      let total = 0;
      _.map(this.props.cart, (quantity, key) => {
        total += quantity * parseInt(this.props.products[key].price_n, 10);
      });
      return total;
    }
  }

  renderCartItems = () => {
    if (!isEmpty(this.props.products)) {
      let { cart } = this.props;
      return _.map(cart, (quantity, key) => {
        let productInfo = this.props.products[key];
        let { name, price_n } = productInfo;
        return (<div key={key} className="item">
          <p className="title">
            <strong>{quantity} x</strong>
            <Link to={`/detail/${key}`}>{name}</Link>
          </p>
          <p className="price" data-end="đ">{price_n}</p>
        </div>)
      });
    }

  }

  render() {
    const { data, onChange, onOrder, errors, editInfor } = this.props;
    return (
      <div id="pay-order">
        <div className="container-title title">3. Thanh toán & Đặt mua</div>
        <div className="container-content">
          <div className="row">
            <div className="col-md-8">
              <div className="delivery-method">
                <div className="step-title">Chọn hình thức giao hàng</div>
                <div className="panel panel-default">
                  <div className="panel-body">
                    <CheckInput
                      name="deliveryType"
                      label="Giao hàng nhanh"
                      type="radio"
                      value="Giao hàng nhanh"
                      onChange={onChange}
                      error={errors.deliveryType}
                    />
                    <CheckInput
                      name="deliveryType"
                      label="Giao hàng miễn phí"
                      type="radio"
                      value="Giao hàng miễn phí"
                      onChange={onChange}
                      error={errors.deliveryType}
                    />
                  </div>
                </div>
              </div>
              <div className="pay-method">
                <div className="step-title">Chọn hình thức thanh toán</div>
                <div className="panel panel-default">
                  <div className="panel-body">
                  <CheckInput
                      name="methodType"
                      label="Thanh toán bằng thẻ quốc tế Visa, Master, JCB"
                      type="radio"
                      value="Thanh toán bằng thẻ quốc tế Visa, Master, JCB"
                      onChange={onChange}
                      error={errors.methodType}
                    />
                   <CheckInput
                      name="methodType"
                      label="Thẻ ATM nội địa/Internet Banking (Miễn phí thanh toán)"
                      type="radio"
                      value="Thẻ ATM nội địa/Internet Banking"
                      onChange={onChange}
                      error={errors.methodType}
                    />
                  </div>
                </div>
              </div>
              <div className="action">
                <button className="btn btn-primary btn-order" onClick={onOrder}>Đặt mua</button>
              </div>
            </div>
            <div className="col-md-4">
              <div className="panel panel-default panel-cart">
                <div className="panel-body">
                  <div className="order">
                    <span className="title">Địa chỉ giao hàng</span>
                    <span className="btn btn-default edit text-right" onClick={editInfor} >Sửa</span>
                  </div>
                  <div className="information">
                    <h6 id="customer-name">{data.name}</h6>
                    <div className="address" id="address">
                      {data.address} - {address.default[data.city].districts[data.district]} - {address.default[data.city].name}.
                      Điện thoại: {data.phone}</div>
                  </div>
                </div>
              </div>
              <div className="panel panel-default panel-cart">
                <div className="panel-body">
                  <div className="order">
                    <span className="title">Đơn hàng</span>
                    <Link className="btn btn-default edit text-right" to={routes.CART}>Sửa</Link>
                  </div>
                  <div className="product" id="order-product-list">
                    {this.renderCartItems()}
                  </div>
                  <div className="total">
                    <span>Thành tiền</span>
                    <span className="numb" id="total" data-end="đ">
                      {this.calculatePrice()}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="clearfix"> </div>
          </div>
        </div>
      </div>

    )
  }
}
export default PaymentConfirm;
