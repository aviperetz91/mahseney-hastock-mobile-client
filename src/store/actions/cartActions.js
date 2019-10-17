import axios from 'axios';
import cartItem from '../../models/cart-item';

export const LOADING_TRUE = "LOADING_TRUE";
export const SET_ITEMS = "SET_ITEMS";
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";


export const isLoadingTrue = () => {
    return { type: LOADING_TRUE }
}

export const fetchItems = () => {
    return dispatch => {
        const loadedItems = [];
        axios.get("https://mahseney-hastock.firebaseio.com/cart/u1.json")
            .then(response => {
                let totalAmount = 0.00;
                for(const key in response.data) {
                    totalAmount += response.data[key].sum
                    loadedItems.unshift(
                        new cartItem(
                            response.data[key].id,
                            response.data[key].quantity,
                            response.data[key].price,
                            response.data[key].title,
                            response.data[key].sum,
                            response.data[key].image
                        )
                    ) 
                }
                dispatch({ type: SET_ITEMS, items: loadedItems, totalAmount: totalAmount  })
            })       
    }   
}

export const addToCart = product => {
    // return { type: ADD_TO_CART, product: product }
    let productsIds = [];
    let itemId;
    return (dispatch, getState) => {
        const items = getState().cart.items;
        axios.get("https://mahseney-hastock.firebaseio.com/cart/u1.json")
            .then(response => {
                for(const key in response.data) {
                    productsIds.push(response.data[key].id);
                    if(response.data[key].id === product.id) {
                        itemId = key;
                    }
                }
                if(productsIds.some(cur => cur === product.id)) {
                    // already have the item in the cart
                    const itemIndex = items.findIndex(item => item.id === product.id);
                    const updatedItem = {
                        quantity: items[itemIndex].quantity + 1, 
                        sum: items[itemIndex].sum + product.price,
                    }
                    axios.patch(`https://mahseney-hastock.firebaseio.com/cart/u1/${itemId}.json`, updatedItem )
                        .then(response =>  dispatch({ type: ADD_TO_CART, product }))
                }
                else {
                    const productItem = {
                        id: product.id,
                        quantity: 1, 
                        price: product.price,
                        title: product.title,
                        sum : product.price,
                        image: product.imageUrl
                    }
                    axios.post(`https://mahseney-hastock.firebaseio.com/cart/u1.json`, productItem)
                        .then(response => dispatch({ type: ADD_TO_CART, product }))
                }
            })
    }
}

export const removeFromCart = item => {
    // return { type: REMOVE_FROM_CART, item: item }
    let itemId;
    return (dispatch, getState) => {
        const items = getState().cart.items;
        axios.get("https://mahseney-hastock.firebaseio.com/cart/u1.json")
            .then(response => {
                for(const key in response.data) {
                    if(response.data[key].id === item.id) {
                        itemId = key;
                    }
                }
                const itemIndex = items.findIndex(cur => cur.id === item.id)
                if(items[itemIndex].quantity > 1) {
                    // already have the item in the cart
                    const updatedItem = {
                        quantity: items[itemIndex].quantity - 1, 
                        sum: items[itemIndex].sum - item.price,
                    }
                    axios.patch(`https://mahseney-hastock.firebaseio.com/cart/u1/${itemId}.json`, updatedItem )
                        .then(response =>  dispatch({ type: REMOVE_FROM_CART, item }))
                }
                else {
                    axios.delete(`https://mahseney-hastock.firebaseio.com/cart/u1/${itemId}.json`)
                        .then(response =>  dispatch({ type: REMOVE_FROM_CART, item }))
                }
            })
    }
}

export const resetCart = () => {
    return dispatch => {
        axios.delete(`https://mahseney-hastock.firebaseio.com/cart/u1.json`);
    }
}