import CartActionTypes from './cart.types';

import { addItemToCart } from './cart.utils';

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

      default:
        return state;
    }
  };
  
  export default cartReducer;