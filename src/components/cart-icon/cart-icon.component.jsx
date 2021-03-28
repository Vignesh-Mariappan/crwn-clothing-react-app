import React from 'react';

import { ReactComponent as ShoppingCartIcon } from '../../assets/shopping-bag.svg';

import { connect } from 'react-redux';
import { toggleCartDropDown } from '../../redux/cart/cart.actions';

import './cart-icon.styles.scss';

const CartIcon = ({ cartDropDownToggle }) => {
    console.log('cart dropdown toggle ', cartDropDownToggle);
    return (
        <div className = "cart-icon">
            <ShoppingCartIcon className = "shopping-icon" onClick = { cartDropDownToggle }/>
            <span className = "item-count">0</span>
        </div>
    )
}

/* cartDropDownToggle will be passed as a prop in the cart-icon component and when the user clicks the cart icon in the screen, it will execute the method present in the cartDropDownToggle. The dispatch in the cartDropDownToggle will take the toggleCartDropDown action and it will execute the cart.reducer and the new state is returned now.  */
const mapDispatchToProps = (dispatch) => {
    return {
        cartDropDownToggle: () => dispatch(toggleCartDropDown())
    }
}

export default connect(null, mapDispatchToProps)(CartIcon);