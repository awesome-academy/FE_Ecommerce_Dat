import React from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';

class Orders extends React.Component {
  render() {
    return (
      <div className={cn('management-box orders-management')}>
        <div className={cn('sub-title')} >Đơn hàng khách hàng</div>
        <table className={cn('table-responsive')}>
          <thead>
            <tr>
              <th>Mã đơn hàng</th>
              <th>Người mua</th>
              <th>Sản phẩm</th>
              <th>Ngày mua</th>
              <th>Tổng tiền</th>
              <th>Trạng thái <br />đơn hàng</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>DH1029281</th>
              <th>Tèo Em</th>
              <th>Pin dành cho laptop HP Elitbook 8460P, 8460w, 8470p, 8470w, 8560p, 8570p, ProBook 6360b, 6460b...và 01 sản phẩm khác</th>
              <th>09/03/2019</th>
              <th>319.000đ</th>
              <th>Chưa tiếp nhận</th>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default Orders;


