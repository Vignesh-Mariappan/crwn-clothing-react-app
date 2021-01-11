import React from 'react';
import SHOP_DATA from  './shop.data';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';

class ShopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = SHOP_DATA;
    }

    render() {
        const collections = this.state;
        return (
            <div>
                <h1>Collections</h1>
                { collections.map(collection => (
                    <CollectionPreview 
                        key = { collection.id } 
                        title = { collection.title }
                        routeName = { collection.routeName }
                        items = { collection.items }/>
                )) }
            </div>
        )
    }
}

export default ShopPage;