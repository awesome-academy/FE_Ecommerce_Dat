import React from 'react';
import Menu from '../Menu';
import Cart from '../Cart';
import Search from '../Search/Search';
import HeaderUser from '../HeaderUser';
import './HeaderLink.scss';

class HeaderLink extends React.Component {
  render() {
    return (
      <>
        <Menu />
        <HeaderUser />
        <Cart />
        <Search />
      </>
    )
  }
}

export default HeaderLink;
