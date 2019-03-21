import { applyMiddleware, createStore, compose } from 'redux';
import rootReducers from './reducers';
import thunk from 'redux-thunk';

const store = compose()(createStore)(
    rootReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk),
  );

export default store;
