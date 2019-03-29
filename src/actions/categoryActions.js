import _ from 'lodash';
import { db } from '../firebase';
import { GET_CATEGORIES, CREATE_CATEGORY, UPDATE_CATEGORY, DELETE_CATEGORY } from '../constants/ActionTypes';

export const getAllCategories = () => dispatch => {
  db.getAllCategories().then(snapshot => {
    dispatch({
      type: GET_CATEGORIES,
      payload: snapshot.val()
    })
  }, (error) => {
    console.log(error)
  })
}

export const createCategory = (data) => dispatch => {
  db.createCategory(data).then((cateRef) => {
    dispatch({
      type: CREATE_CATEGORY,
      payload: {...data, id: cateRef.key}
    })
  }, (error) => {
    // Handle error then
  })
}

export const updateCategory = (data) => dispatch => {
  db.updateCategory(data).then(() => {
    dispatch({
      type: UPDATE_CATEGORY,
      payload: data
    })
  }, (error) => {
    // Handle error then
  })
}

export const deleteCategory = (id) => dispatch => {
  db.deleteCategory(id).then(() => {
    dispatch({
      type: DELETE_CATEGORY,
      payload: id
    })
  }, (error) => {
    // Handle error then
  })
}
