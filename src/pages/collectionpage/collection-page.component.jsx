import React from 'react';

import { connect } from 'react-redux';

import { selectCollection } from '../../redux/collections/collections.selectors';

import CollectionItem from '../../components/collection/collection-item.component';

import './collection-page.styles.scss';

const CollectionPage = ({ collection }) => {
    const { title, items } = collection;
    return (
        <div className = 'collection-page'>
            <h2 className = 'title'>{ title }</h2>
            <div className = 'items'>
                {
                    items
                    .map((item) => (
                        <CollectionItem key = {item.id} item = { item }/>
                    ))
                }
            </div>
        </div>
    )
}

/* for mapStateToProps method, first argument is the state, second will be the props of the component 
selectCollection(ownProps.match.params.collectionId) will return a function 
from the selectCollection    ->    createSelector(
            [selectCollectionsShopData],
            collections => collections.find(collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam])
        )
For the returned function, pass the state as an argument to get it executed
*/
const mapStateToProps = (state, ownProps) => {
    return {
        collection: selectCollection(ownProps.match.params.collectionId)(state)
    }
}

export default connect(mapStateToProps)(CollectionPage);