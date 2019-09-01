import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import productsReducer from './src/store/reducers/productsReducer';

const rootReducer = combineReducers({
    products: productsReducer
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