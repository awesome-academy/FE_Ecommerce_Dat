import React from 'react';
import cn from 'classnames';

class Categories extends React.Component {
  render() {
    return (
      <div className={cn('management-box category-management')}>
        <div className={cn('sub-title')} >Quản lý mặt hàng</div>
        <button className={cn('btn btn-primary')}>Thêm</button>
        <table className={cn('table-responsive')}>
          <thead>
            <tr>
              <th>Mã thể loại</th>
              <th>Tên</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>02817282</td>
              <td>Mỹ phẩm</td>
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

export default Categories;


