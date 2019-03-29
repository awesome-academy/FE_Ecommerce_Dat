import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import loadingReducer from './loadingReducer';
import userReducer from './userReducer';
import categoryReducer from './categoryReducer';

const rootReducers = combineReducers({
  auth: authReducer,
  errors: errorReducer,
  loading: loadingReducer,
  users: userReducer,
  categories: categoryReducer,
})
export default rootReducers;
