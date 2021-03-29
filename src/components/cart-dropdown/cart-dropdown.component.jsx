import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import CartItem from '../cart-item/cart-item.component';
import CustomButton from '../custom-input/custom-input.component';

import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartDropDown } from '../../redux/cart/cart.actions';

import './cart-dropdown.styles.scss';

const CartDropDown = ({ cartItems, history, dispatch }) => {
    return (
        <div className = "cart-dropdown">
            <div className = "cart-items">
            { cartItems.length !== 0 ?
                cartItems.map(cartItem => <CartItem key = { cartItem.id } item =  { cartItem } />) :
                <span className = "empty-message">Your cart is empty!</span>
            }
            </div>
            { cartItems.length !== 0 ? <CustomButton onClick = { () => {
                    history.push('/checkout');
                    dispatch(toggleCartDropDown());
                }
            }>Go To Checkout</CustomButton> : null }
        </div>
    )
}

/* const mapStateToProps = state => {
   return {
       cartItems: selectCartItems(state)
   } 
}; */

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});


export default withRouter(connect(mapStateToProps)(CartDropDown));