import CollectionsActionTypes from './collections.types';

export const updateCollections = collections => {
    return {
        type: CollectionsActionTypes.UPDATE_COLLECTION,
        payload: collections
    }
}