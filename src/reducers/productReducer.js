import { FETCH_PRODUCTS, CREATE_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT } from './../constants/actionTypes';
const initalState = {}

export default function (state = initalState, action) {
  let products = {};
  switch (action.type) {
    case FETCH_PRODUCTS:
      return action.payload;
    case CREATE_PRODUCT:
      return { ...state, [action.payload.id]: action.payload };
    case UPDATE_PRODUCT:
      products = { ...state };
      products[action.payload.id] = action.payload;
      return { ...products };
    case DELETE_PRODUCT:
      products = { ...state };
      delete products[action.payload];
      return { ...products };
    default:
      return state;
  }
}
