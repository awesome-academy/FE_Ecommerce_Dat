import _ from 'lodash';
import { db } from '../firebase';
import { FETCH_PRODUCTS, CREATE_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT } from '../constants/ActionTypes';

export const fetchAllProducts = () => dispatch => {
  db.fetchAllProducts().then(snapshot => {
    dispatch({
      type: FETCH_PRODUCTS,
      payload: snapshot.val()
    })
  }, (error) => {
    console.log(error)
  })
}

export const createProduct = (data) => dispatch => {
  console.log(data);
  db.createProduct(data).then(snapshot => {
    dispatch({
      type: CREATE_PRODUCT,
      payload: {...data, id: snapshot.key}
    })
  }, (error) => {
    console.error(error);
  })
}

export const updateProduct = (data) => dispatch => {
  db.updateProduct({ data }).then(snapshot => {
    dispatch({
      type: UPDATE_PRODUCT,
      payload: data
    })
  }, (error) => {
    console.error(error);
  })
}

export const deleteProduct = (id) => dispatch => {
  db.deleteProduct(id).then(snapshot => {
    dispatch({
      type: DELETE_PRODUCT,
      payload: id
    })
  }, (error) => {
    console.error(error);
  })
}
