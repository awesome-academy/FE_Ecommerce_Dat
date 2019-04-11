import _ from 'lodash';
import React from 'react';
import ProgressNav from './ProgressNav';
import Footer from '../../modules/Footer';
import './Checkout.scss';
import Summary from './Summary';
import * as Routes from '../../constants/routes';
import isEmpty from '../../validation/is-empty';
import * as address from '../../constants/address.json';
import { auth } from '../../firebase/firebase';

class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 0,
      data: {},
      errors: {},
      currentCity: -1
    }
  }

  componentDidMount() {
    if (isEmpty(this.props.products)) {
      this.props.productActions.fetchAllProducts();
    }
  }

  componentWillUnmount() {
    this.setState({
      step: 0,
      data: {},
      errors: {},
      currentCity: -1
    })
  }

  requiredPaymentInforFields = [
    { name: 'name', text: 'Họ tên' },
    { name: 'phone', text: 'Số điện thoại' },
    { name: 'city', text: 'Tỉnh/Thành phố' },
    { name: 'district', text: 'Quận/Huyện' },
    { name: 'address', text: 'Địa chỉ' }
  ]

  requiredPaymentFields = [
    { name: 'deliveryType', text: 'Hình thức giao hàng' },
    { name: 'methodType', text: 'Phương thức thanh toán' }
  ]

  validatePaymentInforFields = () => {
    const errors = {};
    const data = { ...this.state.data };
    this.requiredPaymentInforFields.forEach((field) => {
      if (!data[field.name]) {
        errors[field.name] = `Hãy nhập ${field.text}`;
      }
    });
    if (JSON.stringify(errors) !== '{}') {
      this.setState({ errors });
      return false;
    }
    return true;
  }

  validatePaymentFields = () => {
    const errors = {};
    const data = { ...this.state.data };
    this.requiredPaymentFields.forEach((field) => {
      if (!data[field.name]) {
        errors[field.name] = `Hãy nhập ${field.text}`;
      }
    });
    if (JSON.stringify(errors) !== '{}') {
      this.setState({ errors });
      return false;
    }
    return true;
  }

  onNext = () => {
    if (this.validatePaymentInforFields()) {
      this.setState({
        step: 1
      });
    }
  }

  onOrder = () => {
    if (this.validatePaymentFields()) {
      this.setState({
        step: 2
      })
      let data = {
        ...this.state.data,
        products: this.props.cart,
        uid: auth.currentUser.uid,
        status: false,
        date: Date.now()
      }
      this.props.orderActions.createAnOrder(data);
    }
  }

  editInfor = () => {
    this.setState({
      step: 0
    });
  }

  onChange = (e) => {
    const target = e.target;
    this.setState(state => ({
      data: {
        ...state.data,
        [target.name]: target.type === 'checkbox' ? target.checked : target.value
      },
      errors: {
        ...state.errors,
        [target.name]: undefined
      }
    }));
  }


  render() {
    const { step, data, errors } = this.state;
    const { products, cart } = this.props;
    return (
      <>
        <ProgressNav step={step} />
        <Summary
          step={step}
          data={data}
          errors={errors}
          onChange={this.onChange}
          onNext={this.onNext}
          products={products}
          cart={cart}
          onOrder={this.onOrder}
          editInfor={this.editInfor}
        />
        <Footer />
      </>
    )
  }
}

export default Checkout;
