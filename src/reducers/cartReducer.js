import _ from 'lodash';
import { ADD_TO_CART, REMOVE_ONE_FROM_CART, GET_CART } from './../constants/actionTypes';
import isEmpty from '../validation/is-empty';

const initalState = {}
export default function (state = initalState, action) {
  let cart
  switch (action.type) {
    case GET_CART:
      return action.payload;
    case ADD_TO_CART:
      cart = {
        ...state,
        [action.payload.id]: !isEmpty(state) && state[action.payload.id] && !action.payload.isDirect ?  state[action.payload.id] + action.payload.quantity : action.payload.isDirect ? action.payload.quantity : 1
      }
      return { ...cart }
    case REMOVE_ONE_FROM_CART:
      cart = { ...state };
      delete cart[action.payload];
      return { ...cart };
    default:
      return state;
  }
}
