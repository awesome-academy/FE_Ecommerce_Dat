import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import './Menu.scss';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuActive: false
    }
  }

  handleMenuActive = () => {
    this.setState({ menuActive: !this.state.menuActive })
  }

  render() {
    return (
      <div className={cn("menu")}>
        <label className={cn("navbar-toggle")}>
          <i className={cn("burger-menu-icon")}></i>
        </label>
        <ul id="nav-ul">
          <li><Link to="/">Trang chủ</Link></li>
          <li><Link to="/about">Giới thiệu</Link></li>
          <li onClick={() => this.handleMenuActive()}><label>Sản phẩm<i className="chevron bottom" ></i></label>
            <div className={cn('dropdown-menu', { 'dropdown-active': this.state.menuActive })}>
            </div>
          </li>
          <li><Link to="/blog">Tin tức</Link></li>
          <li><Link to="/contact">Bản đồ</Link></li>
          <li><Link to="/about">Liên hệ</Link></li>
        </ul>
      </div>
    )
  }
}

export default Menu;
