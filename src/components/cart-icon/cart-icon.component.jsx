import React from 'react';

import { ReactComponent as ShoppingCartIcon } from '../../assets/shopping-bag.svg';

import { connect } from 'react-redux';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { toggleCartDropDown } from '../../redux/cart/cart.actions';

import './cart-icon.styles.scss';

const CartIcon = ({ cartDropDownToggle, itemCount }) => {
    // console.log('cart dropdown toggle ', cartDropDownToggle);
    return (
        <div className = "cart-icon">
            <ShoppingCartIcon className = "shopping-icon" onClick = { cartDropDownToggle }/>
            <span className = "item-count">{ itemCount }</span>
        </div>
    )
}

/* cartDropDownToggle will be passed as a prop in the cart-icon component and when the user clicks the cart icon in the screen, it will execute the method present in the cartDropDownToggle. The dispatch in the cartDropDownToggle will take the toggleCartDropDown action and it will execute the cart.reducer and the new state is returned now.  */
const mapDispatchToProps = (dispatch) => {
    return {
        cartDropDownToggle: () => dispatch(toggleCartDropDown())
    }
}

/* This is to get the total quantity of items we added to the cart from the state 
    And we have used selectCartItemsCount selector*/
const mapStateToProps = state => {
    return {
        itemCount: selectCartItemsCount(state)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);