import PRODCUTS from '../../data/temp-data';

const initialState = {
    products: PRODCUTS
} 

const productsReducer = (state=initialState, action) => {
    return state;
}

export default productsReducer;