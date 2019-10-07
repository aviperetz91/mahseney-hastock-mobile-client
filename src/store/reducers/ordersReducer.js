import { ADD_ORDER, ADD_ORDER_LOADING, SET_ORDERS, ISLOADING } from '../actions/ordersActions';
import Order from '../../models/order';

const initialState = {
    orders: [],
    isLoading: false,
    addedOrder: false,
}

const ordersReducer = (state = initialState, action) => {
    switch(action.type) {
        case ISLOADING:
            return {
                ...state,
                isLoading: true
            }
        case SET_ORDERS: 
            return {
                ...state,
                orders: action.orders,
                isLoading: false
            }
        case ADD_ORDER_LOADING: 
            return {
                ...state,
                addedOrder: true
            }
        case ADD_ORDER:
            const newOrder = new Order(
                action.payload.id,
                action.payload.items,
                action.payload.totalAmount,
                action.payload.date
            )
            return {
                ...state,
                orders: [newOrder, ...state.orders],
                addedOrder: false
            }
        default:
            return state;
    }
}

export default ordersReducer;