import React from 'react';

import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart.actions';

import CustomButton from '../custom-input/custom-input.component';

import './collection-item.styles.scss';

const CollectionItem = ({ item, addItem }) => {
    const { id, name, price, imageUrl } = item;
    return (
        <div className = 'collection-item'>
            <div className = 'image' 
                style = {{ backgroundImage: `url(${imageUrl})` }} />
            <div className = 'collection-footer'>
                <span className = 'name'>{name}</span>
                <span className = 'price'>{price}</span>
            </div>
            <CustomButton onClick = { () => addItem(item) } inverted>Add to cart</CustomButton>
        </div>
)};

// collection item component will receive the addItem method as prop
// when the user clicks the Add to cart button, this addItem will get executed
// and the updated state will get dispatched into the store and the dom gets updated
const mapDispatchToProps = dispatch => {
    return {
        addItem: item => dispatch(addItem(item))
    }
}

export default connect(null, mapDispatchToProps)(CollectionItem); 
