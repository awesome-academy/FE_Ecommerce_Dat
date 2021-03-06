import React from 'react';
import { compose } from 'recompose';
import cn from 'classnames';
import './Admin.scss';
import Header from '../../modules/Header/Navbar';
import Footer from '../../containers/Footer';
import AdminNavigator from '../../containers/Admin/AdminNavigator';
import UserContainer from '../../containers/Admin/User';
import { withAuthorization } from '../../session';
import * as ROLES from '../../constants/role';
import isEmpty from '../../validation/is-empty';

class User extends React.Component {
  render() {
    return (
      <>
        <Header />
        <div className={cn('container management')}>
          <AdminNavigator />
          <div className={cn('col-md-9 management__container')}>
            <UserContainer />
          </div>
          <div className={cn('clearfix')}></div>
        </div>
        <Footer />
      </>
    )
  }
}

const condition = authUser => !isEmpty(authUser) && authUser.roles.includes(ROLES.ADMIN);
export default compose(withAuthorization(condition))(User);
