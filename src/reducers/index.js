import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import loadingReducer from './loadingReducer';
import userReducer from './userReducer';

const rootReducers = combineReducers({
  auth: authReducer,
  errors: errorReducer,
  loading: loadingReducer,
  users: userReducer,
})
export default rootReducers;
