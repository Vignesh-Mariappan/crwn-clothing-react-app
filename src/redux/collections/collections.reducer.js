import SHOP_DATA from './shop.data';

const INITIAL_STATE = {
    shopData: SHOP_DATA
}

const collectionsReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default:
            return { ...state }
    }
}

export default collectionsReducer;