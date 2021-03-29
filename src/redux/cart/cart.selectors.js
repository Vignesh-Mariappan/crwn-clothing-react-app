import { createSelector } from 'reselect';

/* input selector - it will select the value from the state */
const selectCart = state => state.cart;

/* create selector */
export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
);

/* create selector to select the cartItems count */
export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accumulator, cartItem) => accumulator + cartItem.quantity, 0)
)