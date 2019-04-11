import _ from 'lodash';
import React from 'react';
import cn from 'classnames';
import isEmpty from '../../validation/is-empty';
import Detail from './Order/Detail';
import DetailModal from './../../modal/DetailModal';
import * as statuses from '../../constants/orderStatus.json';

class Orders extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenDetails: false,
      isOpenDeleteConfirm: false,
      data: {},
      errors: {}
    };
  };

  componentDidMount() {
    if (isEmpty(this.props.orders)) {
      this.props.ordersActions.getAllOrders();
    }
    if (isEmpty(this.props.products)) {
      this.props.productActions.fetchAllProducts();
    }
    if (isEmpty(this.props.users)) {
      this.props.userActions.getAllUsers();
    }
  }

  onChange = (e) => {
    const target = e.target;
    this.setState(state => ({
      data: {
        ...state.data,
        [target.name]: target.name === "status" ? parseInt(target.value) : target.value
      },
      errors: {
        ...state.errors,
        [target.name]: undefined
      }
    }));
  }

  calculatePrice = (order) => {
    if (!isEmpty(this.props.products)) {
      let total = 0;
      _.map(order, (quantity, key) => {
        total += quantity * parseInt(this.props.products[key].price_n, 10);
      });
      return total;
    }
  }

  openModal = (order) => {
    this.setState({
      errors: {}
    })
    if (order) {
      this.setState({
        data: { ...order }
      })
    }
    this.setState({ isOpenDetails: true });
  }

  closeModal = () => {
    this.setState({ isOpenDetails: false, isOpenDeleteConfirm: false, data: {} });
  }
  renderOrders = () => {
    const { orders, users } = this.props;
    return _.map(orders, (order, key) => {
      return (
        <tr key={key}>
          <td onClick={() => this.openModal({...order, oid: key})}>{key}</td>
          <td>{users[order.uid].name}</td>
          <td>{new Date(order.date).toLocaleDateString()}</td>
          <td data-end='đ'>{this.calculatePrice(order.products)}</td>
          <td>{order.status ? statuses.default[order.status] : ''}</td>
        </tr>
      )
    })
  }

  onSaveStatus = () => {
    const { oid, status } = this.state.data;
    this.props.ordersActions.updateOrderStatus(oid, status);
    this.setState({ isOpenDetails: false, data: {} });
  }

  render() {
    const { orders, users, products } = this.props;
    return (
      <div className={cn('management-box orders-management')}>
        <div className={cn('sub-title')} >Đơn hàng khách hàng</div>
        <table className={cn('table-responsive')}>
          <thead>
            <tr>
              <th>Mã đơn hàng</th>
              <th>Người mua</th>
              <th>Ngày mua</th>
              <th>Tổng tiền</th>
              <th>Trạng thái <br />đơn hàng</th>
            </tr>
          </thead>
          <tbody>
            { !isEmpty(users) && !isEmpty(orders) ? this.renderOrders() : null}
          </tbody>
        </table>
        <DetailModal
          DetailModal={Detail}
          data={this.state.data}
          isOpen={this.state.isOpenDetails}
          closeModal={this.closeModal}
          isWideStyle={true}
          products={products}
          onChange={this.onChange}
          onSaveStatus={this.onSaveStatus}
        />
      </div>
    )
  }
}

export default Orders;
