import React from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';

class Products extends React.Component {
  render() {
    return (
      <div className={cn('management-box products-management')}>
        <div className={cn('sub-title')} >Quản lý sản phẩm</div>
        <button className={cn('btn btn-primary')}>Thêm</button>
        <table className={cn('table-responsive')}>
          <thead>
            <tr>
              <th>Mã sản phẩm</th>
              <th>Tên</th>
              <th>Số lượng</th>
              <th>Đơn giá</th>
              <th>Trình trạng</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>SP01928</th>
              <th>Mỹ phẩm Châu Âu</th>
              <th>100</th>
              <th>200.000</th>
              <th>Còn hàng</th>
              <td>
                <button className={cn('btn btn-edit')}>Sửa</button>
                <button className={cn('btn btn-delete')}>Xóa</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default Products;


