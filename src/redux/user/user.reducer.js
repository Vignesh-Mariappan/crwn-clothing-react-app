import UserActionTypes from './user.types';

/* Set the initial state which will be state when the application loads in the browser
simply the state of the app.js is copied here in the INITIAL_STATE variable */

const INITIAL_STATE = {
    currentUser: null
}

/* userReducer is a function that takes two arguments one is current state and another is an action object. State will by default the initial state. If the action type is SET_CURRENT_USER, it will return a new object which will spread the current state and update the currentUser value to the action.payload, so that DOM will get re-rendered based on the updated value to the state. Here we have to return an object only */
const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case UserActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            }
        default:
            return state;
    }
}

export default userReducer;