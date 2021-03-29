import React from 'react';

import './cart-item.styles.scss';

const cartItem = (props) => {
    const { imageUrl, price, name, quantity } = props.item;
    return (
        <div className = 'cart-item'>
            <img src = { imageUrl } alt = 'item' />
            <div className = 'item-details'>
                <span className = 'name'>{ name }</span>
                <span className = 'price'>Rs. { quantity } * { price }</span>
            </div>
        </div>
    )
}

export default cartItem;