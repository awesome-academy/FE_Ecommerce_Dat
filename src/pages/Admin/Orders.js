import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import './Admin.scss';
import Header from '../../modules/Header/Navbar';
import Footer from '../../containers/Footer';
import AdminNavigator from '../../containers/Admin/AdminNavigator';
import OrdersContainer from '../../containers/Admin/Orders';

class Orders extends React.Component {
  render() {
    return (
      <>
        <Header />
        <div className={cn('container management')}>
          <AdminNavigator />
          <div className={cn('col-md-9 management__container')}>
            <OrdersContainer />
          </div>
          <div className={cn('clearfix')}></div>
        </div>
        <Footer />
      </>
    )
  }
}

export default Orders;
