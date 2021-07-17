import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collectionpage/collection-page.component';
import { updateCollections } from '../../redux/collections/collections.actions';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

import { firestore, convertCollectionsSnapshotIntoCollections } from '../../firebase/firebase.utils';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends Component  {

    // set the loading property in the state to true, this will load the spinner until the loading property is changed to false
    state = {
        loading: true
    };

    // create a variable to unsubscribe from the snapshot
    unsubscribeFromCollectionSnapshot = null;

    
    // in componentDidMount make WS call to get the collecionRef from firestore
    componentDidMount = () => {

        const { updatingTheCollection } = this.props;

        // get the collectionRef object from the firestore
        const collectionRef = firestore.collection('collections');

        /* the following event will be triggered when the page is loaded / refreshed and there is any change in the collections collection in the firestore */
        collectionRef.onSnapshot(async (snapshot) => {
            const collections =  convertCollectionsSnapshotIntoCollections(snapshot);

            updatingTheCollection(collections);

            // once the collection is finished updating change the loading property in the state to false;
            this.setState({ loading: false });
        })

    }

    render() {
        const { match } = this.props;
        const { loading } = this.state;
        return (
            <div className = 'shop-page'>
                <Route exact path = {`${match.path}`} render = { props => <CollectionsOverviewWithSpinner isLoading = { loading } {...props} /> } />
                <Route path = {`${match.path}/:collectionId`} render = { props => <CollectionPageWithSpinner isLoading = { loading } {...props} /> }/>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
      updatingTheCollection: collections => {
        dispatch(updateCollections(collections))
      }
    }
  }

export default connect(null, mapDispatchToProps)(ShopPage);
