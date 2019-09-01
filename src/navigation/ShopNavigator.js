import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ProductsScreen from '../screens/ProductsScreen';

import Colors from '../constants/Colors'

const ProductsNavigator = createStackNavigator(
    {
        ProductsScreen: ProductsScreen
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: Colors.primary
            },
            hedearTintColor: "white",
            headerTitleStyle: {
                fontSize: 20,
                color: "white",
                flex: 1,
                textAlign: "center"
            }
        }
    }
)

export default createAppContainer(ProductsNavigator)