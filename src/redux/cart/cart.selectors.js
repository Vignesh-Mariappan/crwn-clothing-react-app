import { createSelector } from 'reselect';

/* input selector - it will select the value from the state */
const selectCart = state => state.cart;

/* create selector */
export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
);

/* create a new selector which selects hidden property of cart in the state */
export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
);

/* create selector to select the cartItems count */
export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accumulator, cartItem) => accumulator + cartItem.quantity, 0)
);

/* create selector to get the total price */
export const selectCartPrice = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accumulator, cartItem) => accumulator + (cartItem.quantity * cartItem.price), 0)
);