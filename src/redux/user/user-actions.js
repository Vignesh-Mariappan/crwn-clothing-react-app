/* user argument will either take the userAuth object or userSnapshot or null */
/* javascript function that returns the action */
export const setCurrentUser = (user) => {
    return {
        type: 'SET_CURRENT_USER',
        payload: user
    }
}