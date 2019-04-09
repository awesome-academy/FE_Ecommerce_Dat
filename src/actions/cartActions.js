import _ from 'lodash';
import { ADD_TO_CART, REMOVE_ONE_FROM_CART } from '../constants/actionTypes';
import { db } from '../firebase';
import DatabaseModule from '../lib/db';

function addToCartLocal(id, quantity) {
  var cart = DatabaseModule.get("cart") || {};
  if (cart[id]) {
    cart[id] += quantity || 1;
  } else {
    cart[id] = 1
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

export const addToCart = ({ id, quantity }) => dispatch => {
  addToCartLocal(id, quantity);
  dispatch({
    type: ADD_TO_CART,
    payload: { id, quantity }
  })
}

export const removeProduct = (id) => dispatch => {
  removeProductLocal(id);
  dispatch({
    type: REMOVE_ONE_FROM_CART,
    payload: id
  })
}


