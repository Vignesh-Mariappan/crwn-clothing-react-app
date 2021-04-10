import CartActionTypes from './cart.types';

import { addItemToCart, decreaseItemQuantityFromCart } from './cart.utils';

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
  };
  
  const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case CartActionTypes.TOGGLE_CART_DROPDOWN:
        return {
          ...state,
          hidden: !state.hidden
        };
      
      // Adding an item to the cart when the user clicks the Add to cart button in the shop page
      case CartActionTypes.ADD_ITEM:
        return {
          ...state,
          cartItems: addItemToCart(state.cartItems, action.payload)
        }

      // Decreasing the quantity when the user clicks the "<" in the checkout page
      // But if the quantity of the item is 1, that item will be removed from the checkout page
      case CartActionTypes.DECREASE_ITEM_QUANTITY:
        return {
          ...state,
          cartItems: decreaseItemQuantityFromCart(state.cartItems, action.payload)
        }

      // Removing an item from the cart
      case CartActionTypes.REMOVE_ITEM_FROM_CART:
          return {
            ...state,
            cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
          }

      default:
        return state;
    }
  };
  
  export default cartReducer;