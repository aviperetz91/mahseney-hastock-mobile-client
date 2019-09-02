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
                    state.items[itemIndex].sum + action.product.price
                ) 
                return {
                    ...state,
                    items: [...state.items.filter(item => item.id !== action.product.id) , updatedItem],
                    totalAmount: state.totalAmount + action.product.price
                }
            }
            else {
                const newItem = new CartItem(
                    action.product.id,
                    1,
                    action.product.price,
                    action.product.title,
                    action.product.price
                )
                return {
                    ...state,
                    items: [...state.items, newItem],
                    totalAmount: state.totalAmount + action.product.price
                }
            }
    }
    return state;
}

export default cartReducer;



// const initialState = {
//     items: {},
//     totalAmount: 0
// }

// const cartReducer = (state=initialState, action) => {
//     switch(action.type) {
//         case ADD_TO_CART:
//             const addedProduct = action.product
//             const productPrice = addedProduct.price;
//             const productTitle = addedProduct.title;

//             if(state.items[addedProduct.id]) {
//                // already have the item in the cart
//                const updatedItem = new CartItem(
//                    state.items[addedProduct.id].quantity + 1,
//                    productPrice,
//                    productTitle,
//                    state.items[addedProduct.id].sum + productPrice
//                ) 
//                return {
//                    ...state,
//                    items: {
//                        ...state.items,
//                         [addedProduct.id]: updatedItem
//                    },
//                    totalAmount: state.totalAmount + productPrice
//                }
//             }
//             else {
//                 const newItem = new CartItem(1, productPrice, productTitle, productPrice);
//                 return {
//                     ...state,
//                     items: {
//                         ...state.items,
//                         [addedProduct.id]: newItem
//                     },
//                     totalAmount: state.totalAmount + productPrice
//                 }
//             }
//     }
//     return state;
// }

// export default cartReducer;