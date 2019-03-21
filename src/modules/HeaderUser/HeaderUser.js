import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import './HeaderUser.scss';

class HeaderUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showChoiceBox: false
        }
    }
    authMenu = () => {
        return (
            <ul>
                <li className={cn('header-user__customer-link')}>
                    <Link to='/login'><span className={cn('header-user__text')}>Đơn hàng của tôi</span></Link>
                </li>
                <li className={cn('header-user__customer-link')}>
                    <Link to='/register'><span className={cn('header-user__text')}>Tài khoản của thôi</span></Link>
                </li>
                <li className={cn('header-user__customer-link')}>
                    <Link to='/register'><span className={cn('header-user__text')}>Sản phẩm đã xem</span></Link>
                </li>
                <li className={cn('header-user__customer-link')}>
                    <Link to='/register'><span className={cn('header-user__text')}>Thoát</span></Link>
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
        return (
            <div className={cn('header-user')}>
                <div className={cn('header-user__name')} onClick={() => this.setState({ showChoiceBox: !this.state.showChoiceBox })}>
                    Đăng nhập
                    </div>
                <div className={cn('header-user__box', { 'header-user__box--active': this.state.showChoiceBox })}>
                    
                </div>
            </div>
        )
    }
}

export default HeaderUser;