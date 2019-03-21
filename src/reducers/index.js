import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import loadingReducer from './loadingReducer';

const rootReducers = combineReducers({
  auth: authReducer,
  errors: errorReducer,
  loading: loadingReducer
})
export default rootReducers;
