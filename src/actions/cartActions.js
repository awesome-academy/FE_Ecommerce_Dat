import _ from 'lodash';
import { ADD_TO_CART, REMOVE_ONE_FROM_CART } from '../constants/actionTypes';
import { db } from '../firebase';
import DatabaseModule from '../lib/db';
import { auth } from '../firebase/firebase';

function addToCartLocal(id, quantity) {
  var cart = DatabaseModule.get("cart") || {};
  if (cart[id]) {
    cart[id] += quantity || 1;
  } else {
    cart[id] = quantity;
  }
  DatabaseModule.set("cart", cart);
}

function removeProductLocal(id) {
  var cart = DatabaseModule.get("cart") || {};
  if (cart[id]) {
    delete cart[id];
  }
  DatabaseModule.set("cart", cart);
}



export const addToCart = ({ id, quantity, isDirect = false }) => dispatch => {
  var user = auth.currentUser;
  if (user) {
    db.getCart(user.uid).then(snapshot => {
      var data = snapshot.val();
      if (data && data[id]) {
        db.updateToCart(user.uid, id, !isDirect ? data[id] + quantity : quantity);
      } else {
        db.updateToCart(user.uid, id, quantity);
      }
    })
  } else {
    addToCartLocal(id, quantity);
  }
  dispatch({
    type: ADD_TO_CART,
    payload: { id, quantity, isDirect }
  })
}

export const removeProduct = (id) => dispatch => {
  removeProductLocal(id);
  dispatch({
    type: REMOVE_ONE_FROM_CART,
    payload: id
  })
}


