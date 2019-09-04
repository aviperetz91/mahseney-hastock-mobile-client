import { PRODUCTS } from '../../data/temp-data';

const initialState = {
    products: PRODUCTS
} 

const productsReducer = (state=initialState, action) => {
    return state;
}

export default productsReducer;