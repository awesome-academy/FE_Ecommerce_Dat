import { GET_ERRORS, SET_CURRENT_USER, LOGINING, REGISTERING, GET_CART } from './../constants/ActionTypes';
import { auth, db } from '../firebase'

export const loginUser = (email, password) => dispatch => {
  dispatch({
    type: LOGINING,
    payload: true
  });
  auth.doSignInWithEmailAndPassword(email, password).then(user => {
    dispatch({
      type: LOGINING,
      payload: false
    });
  }).catch(err => {
    dispatch({
      type: LOGINING,
      payload: false
    });
    dispatch({
      type: GET_ERRORS,
      payload: err.message
    });
  })
}

export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  }
}

// Log user out
export const logoutUser = () => dispatch => {
  auth.doSignOut().then(function () {
    dispatch(setCurrentUser({}));
    dispatch({
      type: GET_CART,
      payload: {}
    })
  }).catch(function (error) {
  });
}

// Create user
export const createUserWithEmailAndPassword = (email, password, name, phone, status) => dispatch => {
  dispatch({
    type: GET_ERRORS,
    payload: ''
  });
  dispatch({
    type: REGISTERING,
    payload: true
  });
  auth.doCreateUserWithEmailAndPassword(email, password).then(function (authData) {
    authData.user.updateProfile({
      displayName: name
    }).then(() => {
      db.doCreateUser(authData.user.uid, name, email, phone, status);
      dispatch(setCurrentUser(authData));
      dispatch({
        type: REGISTERING,
        payload: false
      });
    })
  })
    .catch(function (err) {
      dispatch({
        type: REGISTERING,
        payload: false
      });
      dispatch({
        type: GET_ERRORS,
        payload: err.message
      });
    });
}
