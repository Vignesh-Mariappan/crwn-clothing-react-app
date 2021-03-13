import { combineReducers } from 'redux';

import userReducer from './user/user-reducer';

/* combineReducers will combine all the reducers into one big js object, it takes a js object as an argument where it contains all the reducers */
export default combineReducers({
    user: userReducer
}) 