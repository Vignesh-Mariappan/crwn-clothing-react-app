import React from 'react';

import CustomButton from '../custom-input/custom-input.component';

import './cart-dropdown.styles.scss';

const CartDropDown = () => {
    return (
        <div className = "cart-dropdown">
            <div className = "cart-items"></div>
            <CustomButton>Go To Checkout</CustomButton>
        </div>
    )
}

export default CartDropDown;