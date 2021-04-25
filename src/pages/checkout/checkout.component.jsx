import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import { selectCartItems, selectCartPrice } from '../../redux/cart/cart.selectors';

import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

import './checkout.styles.scss';

const CheckoutPage = ({ cartItems, total }) => {
    return (
        <div className = 'checkout-page'>
            <div className = 'checkout-header'>
                <div className = 'header-block'>
                    <span>Product</span>
                </div>
                <div className = 'header-block'>
                    <span>Description</span>
                </div>
                <div className = 'header-block'>
                    <span>Quantity</span>
                </div>
                <div className = 'header-block'>
                    <span>Price</span>
                </div>
                <div className = 'header-block'>
                    <span>Remove</span>
                </div>
            </div>
            { cartItems.map(cartItem => <CheckoutItem key = { cartItem.id } cartItem = { cartItem }/>) }
            <div className = 'total'>
                <span>Total: $ { total }</span>
            </div>
            <div className = 'test-payment-message'>
                Please use the following test credit card for testing the payment
                <br />
                Card number - 4242 4242 4242 4242
                Expiry date - Any future date
                CVV - Any three digit number
            </div>
            <StripeCheckoutButton price = { total } />
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartPrice
})

export default connect(mapStateToProps)(CheckoutPage);