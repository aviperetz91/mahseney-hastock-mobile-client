import { LOADING_TRUE, SET_ITEMS, ADD_TO_CART, REMOVE_FROM_CART } from '../actions/cartActions';
import { ADD_ORDER } from '../actions/ordersActions';
// import { DELETE_PRODUCT } from '../actions/productsActions';
import CartItem from '../../models/cart-item';

const initialState = {
    items: [],
    totalAmount: 0.00,
    isLoading: false
}

const cartReducer = (state=initialState, action) => {
    switch(action.type) {
        case LOADING_TRUE: 
            return{
                ...state,
                isLoading: true
            }
        case SET_ITEMS:
            return {
                ...state,
                items: action.items,
                totalAmount: action.totalAmount,
                // isLoading: false,
            }
        case ADD_TO_CART:
            if(state.items.some(cur => cur.id === action.product.id)) {
                // already have the item in the cart
                const itemIndex = state.items.findIndex(item => item.id === action.product.id);
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
        case REMOVE_FROM_CART: 
            const itemIndex = state.items.findIndex(item => item.id === action.item.id);
            if(state.items[itemIndex].quantity > 1 ) {
                const itemsArray = [...state.items];
                itemsArray[itemIndex].quantity = itemsArray[itemIndex].quantity - 1;
                itemsArray[itemIndex].sum = itemsArray[itemIndex].sum - action.item.price;
                return {
                    ...state,
                    items: [...itemsArray],
                    totalAmount: state.totalAmount - action.item.price
                }
            } 
            else {
                const itemsArray = [...state.items];
                itemsArray[itemIndex].quantity = itemsArray[itemIndex].quantity - 1;
                itemsArray[itemIndex].sum = itemsArray[itemIndex].sum - action.item.price;
                return {
                    ...state,
                    items: [...state.items.filter(item => item.id !== action.item.id)],
                    totalAmount: state.totalAmount - action.item.price
                }
            }
        case ADD_ORDER:
            return initialState;
        // case DELETE_PRODUCT:
        //     const deleteIndex = state.items.findIndex(item => item.id === action.pid);
        //     if(state.items[deleteIndex]) {
        //         return {
        //             ...state,
        //             items: state.items.filter(item => item.id !== action.pid),
        //             totalAmount: state.totalAmount - state.items[deleteIndex].sum
        //         }
        //     }
        //     else return state; 
        default:
            return state;
    }  
}

export default cartReducer;