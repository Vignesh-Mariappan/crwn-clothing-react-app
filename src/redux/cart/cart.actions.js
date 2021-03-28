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

