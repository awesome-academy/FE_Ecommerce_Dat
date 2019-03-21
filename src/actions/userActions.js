import _ from 'lodash';
import { GET_USERS, UPDATE_USER, DELETE_USER } from '../constants/actionTypes';
import { db } from '../firebase';

export const getAllUsers = () => dispatch => {
  db.getAllUser().then(snapshot => {
    dispatch({
      type: GET_USERS,
      payload: snapshot.val()
    });
  }, (error) => {
    console.log(error);
  });
}

export const updateUser = (data) => dispatch => {
  db.updateUser(data).then(() => {
    dispatch({
      type: UPDATE_USER,
      payload: data
    });
  }, (error) => {
    console.log('updating failed: ', error);
  });
}

export const deleteUser = (id) => dispatch => {
  db.deleteUser(id).then(() => {
    dispatch({
      type: DELETE_USER,
      payload: id
    });
  }, (error) => {
    console.log('updating failed: ', error);
  });
}
