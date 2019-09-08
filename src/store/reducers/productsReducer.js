import { PRODUCTS } from '../../data/temp-data';
import { CREATE_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT } from '../actions/productsActions';
import Product from '../../models/product';

const initialState = {
    products: PRODUCTS
} 

const productsReducer = (state=initialState, action) => {
    switch(action.type) {
        case CREATE_PRODUCT:
            const newProduct = new Product(
                action.product.category,
                new Date().toString(),
                action.product.title,
                action.product.imageUrl,
                action.product.description,
                action.product.price,
            );
            return {
                ...state,
                products: [newProduct, ...state.products]
            }
        case UPDATE_PRODUCT:
            const productIndex = state.products.findIndex(product => product.id === action.product.id);
            const updatedProduct = new Product(
                action.product.category,
                action.product.id,
                action.product.title,
                action.product.imageUrl,
                action.product.description,
                action.product.price
            )
            const updatedProductsArray = [...state.products]
            updatedProductsArray[productIndex] = updatedProduct;
            return{
                ...state,
                products: updatedProductsArray
            }
        case DELETE_PRODUCT:
            return {
                ...state,
                products: state.products.filter(product => product.id !== action.pid)
            }
        default:
            return state;
    }
}

export default productsReducer;