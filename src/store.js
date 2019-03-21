import { applyMiddleware, createStore, compose } from 'redux';
import rootReducers from './reducers';
import thunk from 'redux-thunk';

const middlewares = [thunk];

const store = compose(applyMiddleware(...middlewares))(createStore)(rootReducers);


export default store;
