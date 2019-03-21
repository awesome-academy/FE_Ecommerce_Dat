import React from 'react';
import PaymentInfo from './PaymentInfo';
import PaymentConfirm from './PaymentConfirm';
import Success from '../Success/Success';

class Summary extends React.Component {

  renderSwitch(param) {
    const { data, errors, onChange, onNext, products, cart, onOrder, editInfor } = this.props;
    switch (param) {
      case 0:
        return <PaymentInfo
          data={data}
          errors={errors}
          onChange={onChange}
          onNext={onNext}
        />;
      case 1:
        return <PaymentConfirm
          cart={cart}
          data={data}
          products={products}
          onChange={onChange}
          errors={errors}
          onOrder={onOrder}
          editInfor={editInfor}
        />
      case 2:
        return <Success />
    }
  }

  render() {
    const { step } = this.props;
    return (
      <div className="checkout payment">
        <div className="container">
          {this.renderSwitch(step)}
        </div>
      </div>
    )
  }
}

export default Summary;
