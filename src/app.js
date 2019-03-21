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
import NotFound from './pages/NotFound';
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
          <Route component={NotFound} />
        </Switch>
        <ReduxToastr
          timeOut={4000}
          newestOnTop={false}
          preventDuplicates
          position="top-left"
          transitionIn="fadeIn"
          transitionOut="fadeOut"
          progressBar
          closeOnToastrClick />
      </>
    )
  }
}
export default App;
