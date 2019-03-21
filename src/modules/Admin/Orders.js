import React from 'react';
import cn from 'classnames';

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
            {/* Render data then */}
          </tbody>
        </table>
      </div>
    )
  }
}

export default Orders;


