import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './app';
import { Provider } from 'react-redux';
import store from './store';
import { auth } from './firebase/firebase';
import { setCurrentUser } from './actions/authActions';
import { db } from './firebase';
import DatabaseModule from './lib/db';
import { GET_CART } from './constants/actionTypes';

let cart = DatabaseModule.get("cart");
if (cart) {
  store.dispatch({
    type: GET_CART,
    payload: cart
  })
}

auth.onAuthStateChanged(authUser => {
  if (authUser) {
    db.getUserByUid(authUser.uid).then(snapshot => {
      const dbUser = snapshot.val();
      if (dbUser) {
        // default empty roles
        if (!dbUser.roles) {
          dbUser.roles = [];
        }

        // merge auth and db user
        authUser = {
          uid: authUser.uid,
          email: authUser.email,
          ...dbUser,
        };
        store.dispatch(setCurrentUser(authUser));
      }
    });
  }
})

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
);

module.hot.accept();
