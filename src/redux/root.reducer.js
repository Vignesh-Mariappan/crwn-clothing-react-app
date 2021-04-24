import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import collectionsReducer from './collections/collections.reducer';

// storage from the redux-persist library indicates local storage
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart'] // array of reducers needed to store in the local storage, here only cart values needs to be stored in the storage
}

/* combineReducers will combine all the reducers into one big js object, it takes a js object as an argument where it contains all the reducers */
const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    collections: collectionsReducer
});

export default persistReducer(persistConfig, rootReducer);