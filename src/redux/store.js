import { createStore, applyMiddleware } from 'redux';

import logger from 'redux-logger';

import rootReducer from './root.reducer';

// To persist the store
import { persistStore } from 'redux-persist';

/* Logger should not work in the production, otherwise the user will see the state info in the console log */
const middlewares = process.env.NODE_ENV === 'development' ? [logger] : [];

/* create store will create the store which actually takes two arguments one is the root reducer and other is the middleware which actually the array of middlewares and perform some operation on the action before it reaches the root reducer. Here in our example we only are logging the currentState */
const store = createStore(rootReducer, applyMiddleware(...middlewares));

// Simply pass the store as an argument to the persistStore function to get the persistor object
export const persistor = persistStore(store);

export default store;