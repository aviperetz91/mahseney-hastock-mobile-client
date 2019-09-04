import React from 'react';
import { AppRegistry, I18nManager } from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import productsReducer from './src/store/reducers/productsReducer';
import cartReducer from './src/store/reducers/cartReducer';
import ordersReducer from './src/store/reducers/ordersReducer';

I18nManager.allowRTL(true)

const rootReducer = combineReducers({
    products: productsReducer,
    cart: cartReducer,
    orders: ordersReducer
})

const store = createStore(rootReducer);

const AppRedux = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    )
}


AppRegistry.registerComponent(appName, () => AppRedux);