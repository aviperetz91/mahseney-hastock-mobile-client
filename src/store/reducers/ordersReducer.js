import { ADD_ORDER } from '../actions/ordersActions';
import Order from '../../models/order';

const initialState = {
    orders: []
}

const ordersReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_ORDER:
            const newOrder = new Order(
                new Date().toString(), // temporary
                action.payload.items,
                action.payload.totalAmount,
                new Date()
            )
            return {
                ...state,
                orders: state.orders.concat(newOrder)
            }
        default:
            return state;
    }
}

export default ordersReducer;