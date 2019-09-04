import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from '../screens/HomeScreen/';
import ProductsScreen from '../screens/ProductsScreen';
import ProductDetailsScreen from '../screens/ProductDetailsScreen';
import CartScreen from '../screens/CartScreen';

import Colors from '../constants/Colors'

const ProductsNavigator = createStackNavigator(
    {
        HomeScreen: HomeScreen,
        ProductsScreen: ProductsScreen,
        ProductDetailsScreen: ProductDetailsScreen,
        CartScreen: CartScreen,
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: Colors.primary
            },
            headerTintColor: "white",
            headerTitleStyle: {
                fontSize: 18,
            }
        }
    }
)

export default createAppContainer(ProductsNavigator)