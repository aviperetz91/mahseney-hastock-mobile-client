import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import Icon from 'react-native-vector-icons/FontAwesome5';

import HomeScreen from '../screens/HomeScreen/';
import CategoriesScreen from '../screens/CategoriesScreen';
import ProductsScreen from '../screens/ProductsScreen';
import ProductDetailsScreen from '../screens/ProductDetailsScreen';
import CartScreen from '../screens/CartScreen';
import OrdersScreen from '../screens/OrdersScreen';
import EditProductScreen from '../screens/EditProductScreen';
import BranchesScreen from '../screens/BranchesScreen';
import AuthScreen from '../screens/AuthScreen';

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

const HomeNavigator = createStackNavigator(
    {
        HomeScreen: HomeScreen,
        CartScreen: CartScreen,
        EditProductScreen: EditProductScreen
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

const ShopNavigator = createStackNavigator(
    {
        CategoriesScreen: CategoriesScreen,
        ProductsScreen: ProductsScreen,
        ProductDetailsScreen: ProductDetailsScreen,
        CartScreen: CartScreen,
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
        CartScreen: CartScreen,
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

const BranchesNavigator = createStackNavigator(
    {
        BranchesScreen: BranchesScreen,
        CartScreen: CartScreen,
    },
    {
        navigationOptions: {
            drawerIcon: drawerConfig => (
                <Icon name="store" size={20} color={drawerConfig.tintColor} />
            ) 
        },
        defaultNavigationOptions: navOptions
    }    
)

const AuthNavigator = createStackNavigator(
    {
        AuthScreen: AuthScreen
    },
    {
        navigationOptions: {
            drawerIcon: drawerConfig => (
                <Icon name="user-alt" size={23} color={drawerConfig.tintColor} />
            ) 
        },
        defaultNavigationOptions: navOptions
    }
)

const MainNavigator = createDrawerNavigator(
    {
        ראשי: HomeNavigator,
        התחברות: AuthNavigator,
        קטגוריות: ShopNavigator,
        הזמנות: OrdersNavigator,
        סניפים: BranchesNavigator,
    },
    {
        contentOptions: {
            activeTintColor: Colors.primary
        }
    }
)


export default createAppContainer(MainNavigator);