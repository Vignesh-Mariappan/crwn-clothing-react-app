import CartActionTypes  from './cart.types';

export const toggleCartDropDown = () => ({
    type: CartActionTypes.TOGGLE_CART_DROPDOWN
});

export const addItem = item => {
    return {
        type: CartActionTypes.ADD_ITEM,
        payload: item
    }
}

export const decreaseItemQuantity = item => {
    return {
        type: CartActionTypes.DECREASE_ITEM_QUANTITY,
        payload: item
    }
}

export const removeItemFromCart = item => {
    return {
        type: CartActionTypes.REMOVE_ITEM_FROM_CART,
        payload: item
    }
}



