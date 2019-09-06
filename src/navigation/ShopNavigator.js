import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import Icon from 'react-native-vector-icons/FontAwesome5';

import HomeScreen from '../screens/HomeScreen/';
import CategoriesScreen from '../screens/CategoriesScreen';
import ProductsScreen from '../screens/ProductsScreen';
import ProductDetailsScreen from '../screens/ProductDetailsScreen';
import CartScreen from '../screens/CartScreen';
import OrdersScreen from '../screens/OrdersScreen';

import Colors from '../constants/Colors';

const navOptions = {
    headerStyle: {
        backgroundColor: Colors.primary
    },
    headerTintColor: "white",
    headerTitleStyle: {
        fontSize: 18,
    }
}

const MainNavigator = createStackNavigator(
    {
        HomeScreen: HomeScreen,
        ProductsScreen: ProductsScreen,
        ProductDetailsScreen: ProductDetailsScreen,
        
    },
    {
        navigationOptions: {
            drawerIcon: drawerConfig => (
                <Icon name="home" size={23} color={drawerConfig.tintColor} />
            ) 
        },
        defaultNavigationOptions: navOptions
    }
)

const CategoriesNavigatopr = createStackNavigator(
    {
        CategoriesScreen: CategoriesScreen
    },
    {
        navigationOptions: {
            drawerIcon: drawerConfig => (
                <Icon name="th-large" size={23} color={drawerConfig.tintColor} />
            ) 
        },
        defaultNavigationOptions: navOptions
    }
)

const OrdersNavigator = createStackNavigator(
    {
        OrdersScreen: OrdersScreen,
    },
    {
        navigationOptions: {
            drawerIcon: drawerConfig => (
                <Icon name="list-ol" size={23} color={drawerConfig.tintColor} />
            ) 
        },
        defaultNavigationOptions: navOptions
    }    
)

const CartNavigator = createStackNavigator(
    {
        CartScreen: CartScreen,
    },
    {
        navigationOptions: {
            drawerIcon: drawerConfig => (
                <Icon name="shopping-cart" size={23} color={drawerConfig.tintColor} />
            ) 
        },
        defaultNavigationOptions: navOptions
    }    
)

const RootNavigator = createDrawerNavigator(
    {
        ראשי: MainNavigator,
        קטגוריות: CategoriesNavigatopr,
        עגלה: CartNavigator,
        הזמנות: OrdersNavigator,
    },
    {
        contentOptions: {
            activeTintColor: Colors.primary
        }
    }
)

export default createAppContainer(RootNavigator);