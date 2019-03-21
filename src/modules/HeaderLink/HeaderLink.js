import React from 'react';
import Menu from '../Menu';
import Cart from '../Cart';
import Search from '../Search/Search';
import HeaderUser from '../HeaderUser';
import './HeaderLink.scss';

class HeaderLink extends React.Component {
  render() {
    const { cart, products, cartActions } = this.props;
    return (
      <>
        <Menu />
        <HeaderUser />
        <Cart
          cart={cart}
          products={products}
          removeProduct={cartActions.removeProduct}
        />
        <Search />
      </>
    )
  }
}

export default HeaderLink;
