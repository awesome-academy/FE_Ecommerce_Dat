import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import cn from 'classnames';
import './HeaderUser.scss';
import { logoutUser } from './../../actions/authActions';
import * as routes from '../../constants/routes';


class HeaderUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showChoiceBox: false
    }
  }
  handleLogoutUser = () => {
    this.props.logoutUser();
  }
  authMenu = () => {
    return (
      <ul>
        <li className={cn('header-user__customer-link')}>
          <Link to='/order/history'><span className={cn('header-user__text')}>Đơn hàng của tôi</span></Link>
        </li>
        <li className={cn('header-user__customer-link')}>
          <Link to='/customer/account/edit'><span className={cn('header-user__text')}>Tài khoản của thôi</span></Link>
        </li>
        <li className={cn('header-user__customer-link')}>
          <Link to='/individual/products'><span className={cn('header-user__text')}>Sản phẩm đã xem</span></Link>
        </li>
        <li className={cn('header-user__customer-link')}>
          <Link to={routes.USERS}><span className={cn('header-user__text')}>Admin</span></Link>
        </li>
        <li className={cn('header-user__customer-link')}>
          <div className={cn('btn')} onClick={() => { this.handleLogoutUser() }}><span className={cn('header-user__text')}>Thoát</span></div>
        </li>
      </ul>
    )
  }

  nonAuthMenu = () => {
    return (
      <ul>
        <li className={cn('header-user__login')}>
          <Link to='/login'><span className={cn('header-user__text')}>Đăng nhập</span></Link>
        </li>
        <li className={cn('header-user__register')}>
          <Link to='/register'><span className={cn('header-user__text')}>Tạo tài khoản</span></Link>
        </li>
      </ul>
    )
  }

  render() {
    const { auth } = this.props;
    return (
      <div className={cn('header-user')}>
        <div className={cn('header-user__name')} onClick={() => this.setState({ showChoiceBox: !this.state.showChoiceBox })}>
          {auth.isAuthenticated !== false ? `Xin chào ...` : 'Đăng nhập'}
        </div>
        <div className={cn('header-user__box', { 'header-user__box--active': this.state.showChoiceBox })}>
          {auth.isAuthenticated ? this.authMenu() : this.nonAuthMenu()}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps, { logoutUser })(HeaderUser);
