import React from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import * as routes from '../../constants/routes';

class Navigator extends React.Component {
  render() {
    return (
      <div className={cn('col-md-3 management__head')}>
        <div className={cn('management__welcome')}>
          Tài khoản của
          <p>Nguyen Van Tèo</p>
        </div>
        <div className={cn('management__content')}>
          <ul className={cn('list')}>
            <li>
              <Link to={routes.USERS}>Quản lý tài khoản người dùng</Link>
            </li>
            <li>
              <Link to={routes.ORDERS}>Quản lý các đơn hàng</Link>
            </li>
            <li>
              <Link to={routes.PRODUCTS}>Quản lý sản phẩm</Link>
            </li>
            <li>
              <Link to={routes.CATEGORIES}>Quản lý các loại sản phẩm</Link>
            </li>
            <li>
              <Link to={routes.STATISTIC}>Thống kê</Link>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Navigator;
