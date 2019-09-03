import {ADD_TO_CART} from '../actions/cartActions';
import CartItem from '../../models/cart-item';

const initialState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state=initialState, action) => {
    switch(action.type) {
        case ADD_TO_CART:
            if(state.items.some(cur => cur.id === action.product.id)) {
                // already have the item in the cart
                const itemIndex = state.items.findIndex(item => item.id === action.product.id)
                const updatedItem = new CartItem(
                    action.product.id,
                    state.items[itemIndex].quantity + 1,
                    action.product.price,
                    action.product.title,
                    state.items[itemIndex].sum + action.product.price,
                    action.product.imageUrl
                ) 
                return {
                    ...state,
                    items: [updatedItem, ...state.items.filter(item => item.id !== action.product.id)],
                    totalAmount: state.totalAmount + action.product.price
                }
            }
            else {
                const newItem = new CartItem(
                    action.product.id,
                    1,
                    action.product.price,
                    action.product.title,
                    action.product.price,
                    action.product.imageUrl
                )
                return {
                    ...state,
                    items: [newItem, ...state.items],
                    totalAmount: state.totalAmount + action.product.price
                }
            }
    }
    return state;
}

export default cartReducer;