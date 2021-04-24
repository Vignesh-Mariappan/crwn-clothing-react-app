import { createSelector }  from 'reselect';

// Input selector to select the collection reducer from the state
export const selectCollections = state => state.collections;

// Create selector to select the shop data from the collections
export const selectCollectionsShopData = createSelector(
    [selectCollections],
    collections => collections.shopData
);

// Convert the shopdata object we get from the collections state into array
// Pass the JavaScript object as an argument of Object.keys to get the keys of the object as an array and use map method to iterate each key to get the equivalent value and it will converted into an array 
export const convertCollectionsShopDatatoArray = createSelector(
    [selectCollectionsShopData],
    collections => Object.keys(collections).map(key => collections[key])
)

// The following selectCollection is to select the collection based on the url param
// if the url param is hats, the following will select only the hats collection from the collections
// selectCollection will return the function where we need to pass the state 
export const selectCollection = (collectionUrlParam) => createSelector(
    [selectCollectionsShopData],
    collections => collections[collectionUrlParam]
)

