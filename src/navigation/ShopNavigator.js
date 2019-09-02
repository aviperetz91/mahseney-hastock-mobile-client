import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import ProductsScreen from '../screens/ProductsScreen';
import ProductDetailsScreen from '../screens/ProductDetailsScreen';

import Colors from '../constants/Colors'

const ProductsNavigator = createStackNavigator(
    {
        ProductsScreen: ProductsScreen,
        ProductDetailsScreen: ProductDetailsScreen,
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