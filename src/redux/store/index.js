import { createStore } from 'redux';

const initialState = {
    cart:[]
};

const reducer = ( state=initialState, action ) => {
    const tempCart = state.cart
    switch( action.type ){
        case 'ADD_TO_CART':
            var isExist = tempCart.findIndex(obj => obj.product_id === action.payloads.product_id)
            if(isExist < 0){
                state = {
                    ...state,
                    cart: [...state.cart, action.payloads]
                };
            }
            else{
                tempCart[isExist] = action.payloads;
                state = {
                    cart: tempCart
                };
            }
            console.log(state.cart);
            return state;
        case 'UPDATE_CART':
            var isExist = tempCart.findIndex(obj => obj.product_id === action.payloads.product_id)
            console.log(state.cart);
            console.log(action.payloads)
            // state = {
            //     ...state,
            //     cart: [...state.cart, action.payloads]
            // };
            return state;
        default:
            return state;
    }
};

export const initializeStore = (preloadedState = initialState) => {
    return createStore(reducer, preloadedState)
}