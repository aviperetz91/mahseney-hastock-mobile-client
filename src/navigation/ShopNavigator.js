import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import ProductsScreen from '../screens/ProductsScreen';
import ProductDetailsScreen from '../screens/ProductDetailsScreen';
import CartScreen from '../screens/CartScreen';

import Colors from '../constants/Colors'

const ProductsNavigator = createStackNavigator(
    {
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
                fontSize: 20,
                flex: 1,
                textAlign: "center"
            }
        }
    }
)

export default createAppContainer(ProductsNavigator)