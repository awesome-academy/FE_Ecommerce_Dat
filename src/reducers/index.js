import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import loadingReducer from './loadingReducer';
import userReducer from './userReducer';
import categoryReducer from './categoryReducer';
import productReducer from './productReducer';
import cartReducer from './cartReducer';
import { reducer as toastrReducer } from 'react-redux-toastr';

const rootReducers = combineReducers({
  auth: authReducer,
  errors: errorReducer,
  loading: loadingReducer,
  users: userReducer,
  categories: categoryReducer,
  products: productReducer,
  toastr: toastrReducer,
  cart: cartReducer
})
export default rootReducers;
