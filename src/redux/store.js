import { createStore, applyMiddleware } from 'redux';

import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [logger];

/* create store will create the store which actually takes two arguments one is the root reducer and other is the middleware which actually the array of middlewares and perform some operation on the action before it reaches the root reducer. Here in our example we only are logging the currentState */
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;