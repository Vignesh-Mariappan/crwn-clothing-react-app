import React from 'react';

import { connect } from 'react-redux';

import CartItem from '../cart-item/cart-item.component';
import CustomButton from '../custom-input/custom-input.component';

import './cart-dropdown.styles.scss';

const CartDropDown = ({ cartItems }) => {
    // const { cartItems } = cartItems;
    // console.log('cartItems ', cartItems);
    return (
        <div className = "cart-dropdown">
            <div className = "cart-items">
            { cartItems.map(cartItem => <CartItem key = { cartItem.id } item =  { cartItem } />) }
            </div>
            <CustomButton>Go To Checkout</CustomButton>
        </div>
    )
}

const mapStateToProps = state => {
   return {
       cartItems: state.cart.cartItems
   } 
};

export default connect(mapStateToProps)(CartDropDown);