import CollectionsActionTypes from './collections.types';

const INITIAL_STATE = {
    collections: null
}

const collectionsReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case CollectionsActionTypes.UPDATE_COLLECTION:
            return {
            ...state,
            collections: action.payload
            }

        default:
            return { ...state }
    }
}

export default collectionsReducer;