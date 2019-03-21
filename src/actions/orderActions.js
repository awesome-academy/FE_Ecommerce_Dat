import { db } from '../firebase';
import { RESET_ORDER, GET_CART } from '../constants/ActionTypes';
import { auth } from '../firebase/firebase';

export const createAnOrder = (data) => dispatch => {
  const user = auth.currentUser;
  db.createOrder(data).then(snapshot => {
    dispatch({
      type: RESET_ORDER
    })
    db.saveToCart(user.uid, {}).then((error) => {
      if (!error) {
        dispatch({
          type: GET_CART,
          payload: {}
        })
      }
    })
  })
}
