import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.scss';

class NotFound extends React.Component {
    render() {
        return (
            <div className="error-page">
                <div className="container"><img src={require('../../assets/images/404.png')} />
                    <p className="description">Đây không phải là trang web bạn đang tìm kiếm</p>
                    <input className="search" type="text" />
                    <ul className="menu">
                        <li><Link to="/contact">Liên hệ</Link></li>
                        <li><Link to="/">Trang chủ</Link></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default NotFound;