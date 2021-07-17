import React from 'react';
import { withRouter } from 'react-router-dom';

import CollectionItem from '../collection/collection-item.component';
import './collection-preview.styles.scss';

const CollectionPreview = ({ title, items, history, match }) => {

    const loadSpecificCollection = () => history.push(`${ match.path }/${ title.toLowerCase() }`);

    return ( 
        <div className = 'collection-preview'>
            <h1 className = 'title'
            onClick = { loadSpecificCollection } > { title.toUpperCase() } 
            </h1>  
            <div className = 'preview' > 
            {
                items
                .filter((item, index) => index < 4)
                .map((item) => ( <
                    CollectionItem key = { item.id }
                    item = { item }
                    />
                ))
            } 
            </div>
            <div className = 'view-more-container' onClick = { loadSpecificCollection }>
                <div className = 'view-more'>View More</div>
            </div>
        </div>
    )
}

export default withRouter(CollectionPreview);