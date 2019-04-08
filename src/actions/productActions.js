import _ from 'lodash';
import { db } from '../firebase';
import { FETCH_PRODUCTS, CREATE_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT, FETCHING_PRODUCTS } from '../constants/ActionTypes';

export const fetchAllProducts = () => dispatch => {
  dispatch({
    type: FETCHING_PRODUCTS,
    payload: true
  })
  db.fetchAllProducts().then(snapshot => {
    dispatch({
      type: FETCH_PRODUCTS,
      payload: snapshot.val()
    });
    dispatch({
      type: FETCHING_PRODUCTS,
      payload: false
    });
  }, (error) => {
  })
}

export const createProduct = (data) => dispatch => {
  db.createProduct(data).then(snapshot => {
    dispatch({
      type: CREATE_PRODUCT,
      payload: {...data, id: snapshot.key}
    })
  }, (error) => {
  })
}

export const updateProduct = (data) => dispatch => {
  db.updateProduct({ data }).then(snapshot => {
    dispatch({
      type: UPDATE_PRODUCT,
      payload: data
    })
  }, (error) => {
  })
}

export const deleteProduct = (id) => dispatch => {
  db.deleteProduct(id).then(snapshot => {
    dispatch({
      type: DELETE_PRODUCT,
      payload: id
    })
  }, (error) => {
  })
}
