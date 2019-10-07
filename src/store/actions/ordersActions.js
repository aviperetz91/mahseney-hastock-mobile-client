import axios from 'axios';
import Order from '../../models/order';

export const ISLOADING = "ISLOADING";
export const SET_ORDERS = "SET_ORDERS";
export const ADD_ORDER_LOADING = "NEW_ORDER_LOADING";
export const ADD_ORDER = "ADD_ORDER";


export const isLoadingTrue = () => {
    return { type: ISLOADING }
}

export const fetchOrders = () => {
    return dispatch => {
        axios.get("https://mahseney-hastock.firebaseio.com/orders/u1.json")
            .then(response => {
                const loadedOrders = [];
                for(const key in response.data) {
                    loadedOrders.unshift(
                        new Order(
                            key,
                            response.data[key].items,
                            response.data[key].totalAmount,
                            response.data[key].date
                        )
                    ) 
                }
                dispatch({ type: SET_ORDERS, orders: loadedOrders })
            })
    }
}

export const addOrderLoading = () => {
    return { type: ADD_ORDER_LOADING }
}

export const addOrder = (items, totalAmount) => {
    // return { 
    //     type: ADD_ORDER, 
    //     payload: { items: items, totalAmount: totalAmount }
    // }
    return dispatch => {
        const date = new Date();
        axios.post("https://mahseney-hastock.firebaseio.com/orders/u1.json", {
            items,
            totalAmount,
            date: date.toISOString()
        })
            .then(response => {
                dispatch({ type: ADD_ORDER, payload: {
                    id: response.data.name,
                    items: items,
                    totalAmount: totalAmount, 
                    date: date
                }})
            });
    }
}