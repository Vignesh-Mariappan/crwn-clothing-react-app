import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { convertCollectionsShopDatatoArray } from '../../redux/collections/collections.selectors';
import CollectionPreview from '../collection-preview/collection-preview.component';

const CollectionsOverview = ({ collections }) => (
    <div className = 'collections-overview'>
        <h1>Collections</h1>
        { collections.map(({ id, ...otherCollectionProps }) => (
            <CollectionPreview key = { id } { ...otherCollectionProps } />
        )) }
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: convertCollectionsShopDatatoArray
})

export default connect(mapStateToProps)(CollectionsOverview);