import _ from 'lodash';
import React from 'react';
import cn from 'classnames';
import './Edit.scss';
import InputField from '../../../../components/InputField';
import { Link } from 'react-router-dom';
import isEmpty from '../../../../validation/is-empty';
import InputSelect from '../../../../components/InputSelect';
import * as statuses from '../../../../constants/orderStatus.json';

class Edit extends React.PureComponent {

  calculatePrice = () => {
    if (!isEmpty(this.props.products)) {
      let total = 0;
      _.map(this.props.data.products, (quantity, key) => {
        total += quantity * parseInt(this.props.products[key].price_n, 10);
      });
      return total;
    }
  }

  render() {
    const { onChange, onSaveStatus, closeModal, errors, data = {}, products } = this.props;
    return (
      <div className={cn('modal order-modal')}>
        <div className={cn('modal__title')}>Thông tin đơn hàng</div>
        <div className={cn('modal__content')}>
          <div className={cn('modal__detail')}>
            <InputField
              label="Tên người nhận: "
              type="text"
              value={data.name}
              disabled={true} />
            <InputField
              label="Số điện thoại: "
              type="text"
              value={data.phone}
              disabled={true} />
            <InputField
              label="Địa chỉ: "
              type="text"
              value={data.name}
              disabled={true} />
            <InputField
              label="Loại địa chỉ: "
              type="text"
              value={data.individualType ? "Nhà riêng" : "Công ty"}
              disabled={true} />
            <InputField
              label="Hình thức thanh toán: "
              type="text"
              value={data.methodType}
              disabled={true} />
            <InputField
              label="Phương thức vận chuyển: "
              type="text"
              value={data.deliveryType}
              disabled={true} />

          </div>
          <div className={cn('modal__detail')}>
            <InputSelect
              label="Tình trạng"
              onChange={onChange}
              value={data.status}
              data={statuses.default}
              name="status"
            />
            <InputField
              label="Ngày mua: "
              type="text"
              value={new Date(data.date).toLocaleDateString()}
              disabled={true} />
            <div className={cn("form-group")}>
              <label>Sản phẩm</label>
              <div className="product-list">
                {
                  _.map(data.products, (quantity, key) => {
                    return (<div key={key} className="product-list__item">
                      <p className="product-list__item--title">
                        <strong>{quantity} x </strong>
                        <Link to={`/detail/${key}`}>{products[key].name}</Link>
                      </p>
                      <p className="product-list__item--price" data-end="đ">{products[key].price_n}</p>
                    </div>)
                  })
                }
              </div>
            </div>
            <InputField
              label="Tổng tiền: "
              type="text"
              value={this.calculatePrice() + "đ"}
              disabled={true} />
          </div>
        </div>
        <div className={cn('action')}>
          <div onClick={closeModal} className={cn('btn btn-cancel')}>Đóng</div>
          {
            data.status ? <div onClick={onSaveStatus} className={cn('btn btn-save')}>Lưu</div> : ''
          }
        </div>
      </div>
    );
  }
}

export default Edit;
