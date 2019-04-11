import { GET_ALL_ORDERS, UPDATE_ORDER_STATUS } from './../constants/actionTypes';
const initalState = {}
export default function (state = initalState, action) {
  switch (action.type) {
    case GET_ALL_ORDERS:
      return action.payload;
    case UPDATE_ORDER_STATUS:
      let orders = { ...state };
      orders[action.payload.oid].status = action.payload.status;
      return { ...orders };
    default:
      return state;
  }
}
