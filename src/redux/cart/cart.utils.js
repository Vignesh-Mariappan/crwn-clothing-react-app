export const addItemToCart = (cartItems, cartItemToAdd) => {
    const isCartItemToAddExists = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);

    // if the cart item to add exists in the cart items array, create a new array using map function so that the state will gets updated. Using map function, we need to add other cart items to the cart items array, but to update the quantity to the already existing item
    /* 
        case 1:
        cartItems = [{ id: 1, type: 'shirt', quantity: 1 }, { id: 2, type: 'pant', quantity: 1 }]
        cartItemToAdd = { id: 1, type: 'shirt' }
        output -> [{ id: 1, type: 'shirt', quantity: 2 }, { id: 2, type: 'pant', quantity: 1 }]

        case 2:
        cartItems = [{ id: 1, type: 'shirt', quantity: 1 }, { id: 2, type: 'pant', quantity: 1 }]
        cartItemToAdd = { id: 3, type: 't-shirt' }
        output -> [{ id: 1, type: 'shirt', quantity: 1 }, { id: 2, type: 'pant', quantity: 1 }, { id: 1, type: 't-shirt', quantity: 1 }]
    */
    if(isCartItemToAddExists) {
        return cartItems.map(cartItem => cartItem.id === cartItemToAdd.id ? 
            { ...cartItemToAdd, quantity: cartItem.quantity + 1 } : cartItem)
    }

    // if the item to be added is not exists in the cartItems array, create the new array with spreading the exisiting cartItems array and add one new item cartItemToAdd with quantity is set to 1
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
}