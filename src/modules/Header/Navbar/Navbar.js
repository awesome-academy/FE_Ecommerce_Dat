import React from 'react';
import './Navbar.scss';
import Logo from '../../Logo';
import HeaderLink from '../../../containers/HeaderLink';
import cn from 'classnames';

class Navbar extends React.Component {
  render() {
    return (
      <div className={cn("navbar")}>
        <div className={cn("container navbar-container")}>
          <Logo />
          <HeaderLink />
        </div>
      </div>
    )
  }
}

export default Navbar;
