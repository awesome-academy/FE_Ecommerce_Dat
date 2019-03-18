import { applyMiddleware, createStore, compose } from 'redux';
import rootReducers from './reducers';

const store = compose()(createStore)(rootReducers);

export default store;