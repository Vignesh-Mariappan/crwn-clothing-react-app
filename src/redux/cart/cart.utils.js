export const addItemToCart = (cartItems, cartItemToAdd) => {
    const isCartItemToAddExists = isCartItemExists(cartItems, cartItemToAdd);

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

export const decreaseItemQuantityFromCart = (cartItems, cartItemToDecreaseQuantity) => {
    // Find whether the item to reduce the quantity exists
    const cartItemToDecreaseQuantityExists = isCartItemExists(cartItems, cartItemToDecreaseQuantity);

    /* 
        case 1: 
        cartItems = [{ id: 1, type: 'shirt', quantity: 1 }, { id: 2, type: 'pant', quantity: 1 }]
        cartItemToDecreaseQuantity = { id: 1, type: 'shirt' }
        // quantity is 1, so it is required to remove from the cartItems
        output -> [{ id: 2, type: 'pant', quantity: 1 }] 
    */

    if(cartItemToDecreaseQuantityExists.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToDecreaseQuantityExists.id)
    }

    /* 
        case 2: 
        cartItems = [{ id: 1, type: 'shirt', quantity: 2 }, { id: 2, type: 'pant', quantity: 1 }]
        cartItemToDecreaseQuantity = { id: 1, type: 'shirt', quantity: 2 }
        output -> [{ id: 1, type: 'shirt', quantity: 1 }, { id: 2, type: 'pant', quantity: 1 }] 
    */
   return cartItems.map(cartItem => cartItem.id === cartItemToDecreaseQuantity.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem)

}

const isCartItemExists = (cartItems, cartItemToCheck) => cartItems.find(cartItem => cartItem.id === cartItemToCheck.id);