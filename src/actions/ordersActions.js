import { db } from '../firebase';
import { GET_ALL_ORDERS, UPDATE_ORDER_STATUS } from '../constants/ActionTypes';

export const getAllOrders = () => dispatch => {
  db.getAllOrders().then(snapshot => {
    dispatch({
      type: GET_ALL_ORDERS,
      payload: snapshot.val()
    })
  })
}

export const updateOrderStatus = (oid, status) => dispatch => {
  db.updateOrderStatus(oid, status).then(error => {
    if (!error) {
      dispatch({
        type: UPDATE_ORDER_STATUS,
        payload: {oid, status}
      })
    }
  })
}
