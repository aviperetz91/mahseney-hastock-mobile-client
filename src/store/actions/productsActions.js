import axios from 'axios';
import Product from '../../models/product';

export const SET_PRODUCTS = "SET_PRODUCTS";
export const CREATE_PRODUCT = "CREATE_PRODUCT";
export const UPDATE_PRODUCT = "UPDATE_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";


export const fetchProducts = () => {
    return dispatch => {
        axios.get("https://mahseney-hastock.firebaseio.com/products.json")
            .then(response => {
                const loadedProducts = [];
                for(const key in response.data) {
                    loadedProducts.unshift(
                        new Product(
                            response.data[key].category,
                            key,
                            response.data[key].title,
                            response.data[key].imageUrl,
                            response.data[key].description,
                            response.data[key].price,
                        )
                    ) 
                }
                dispatch({ type: SET_PRODUCTS, products: loadedProducts })
            })
    }
}

export const createProduct = (product) => {
    // return { type: CREATE_PRODUCT, product: product}
    return dispatch => {
        axios.post("https://mahseney-hastock.firebaseio.com/products.json", product)
            .then(response => {
                dispatch({ type: CREATE_PRODUCT, product: {
                    id: response.data.name,
                    category: product.category,
                    title: product.title,
                    imageUrl: product.imageUrl ,
                    price: product.price,
                    description: product.description
                }})
            });  
    }
}

export const updateProduct = (product) => {
    return { type: UPDATE_PRODUCT, product: product }
}

export const deleteProduct = productId => {
    return { type: DELETE_PRODUCT, pid: productId }
}