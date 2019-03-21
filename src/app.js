import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import * as routes from './constants/routes';
import Home from './containers/Home'
import Login from './containers/Login';
import Register from './containers/Register';
import User from './pages/Admin/User';
import Products from './pages/Admin/Products';
import Categories from './pages/Admin/Categories';
import Orders from './pages/Admin/Orders';
import Detail from './containers/Detail';
import NotFound from './pages/NotFound';
import Cart from './containers/Cart';
import Checkout from './containers/Checkout';
import ReduxToastr from 'react-redux-toastr';

class App extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route exact path={routes.ROOT} component={Home} />
          <Route exact path={routes.LOGIN} component={Login} />
          <Route exact path={routes.REGISTER} component={Register} />
          <Route exact path={routes.USERS} component={User} />
          <Route exact path={routes.PRODUCTS} component={Products} />
          <Route exact path={routes.CATEGORIES} component={Categories} />
          <Route exact path={routes.ORDERS} component={Orders} />
          <Route exact path={routes.DETAIL} component={Detail} />
          <Route exact path={routes.CART} component={Cart} />
          <Route exact path={routes.CHECKOUT} component={Checkout} />
          <Route component={NotFound} />
        </Switch>
        <ReduxToastr
          timeOut={4000}
          newestOnTop={false}
          preventDuplicates
          position="bottom-right"
          transitionIn="fadeIn"
          transitionOut="fadeOut"
          progressBar
          closeOnToastrClick />
      </>
    )
  }
}
export default App;
