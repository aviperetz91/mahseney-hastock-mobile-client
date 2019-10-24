import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../../components/HeaderButton';
import styles from './style';
import LogoTitle from '../../components/LogoTitle';

class HomeScreen extends Component {

    static navigationOptions = ({navigation}) => {
        return {
            // headerTitle: <LogoTitle />,
            headerTitle: 
                <Text style={styles.title}>
                    מחסני הסטוק
                </Text>,
            headerLeft: 
                <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item 
                        title="Menu"
                        iconName="bars"
                        onPress={() => navigation.toggleDrawer()}
                    />
                </HeaderButtons>,
            headerRight:
                <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item 
                        title="Cart"
                        iconName="shopping-cart"
                        onPress={() => navigation.navigate("CartScreen")}
                    />,
                    {/* <Item 
                        title="Add"
                        iconName="pencil-alt"
                        onPress={() => navigation.navigate("EditProductScreen")}
                    /> */}
                </HeaderButtons>,
        }
    }

    render() {
        return (
            <ScrollView contentContainerStyle={styles.screen}>
                <View style={styles.slider}>
            
                </View>
            </ScrollView>  
        )
    }
}

export default HomeScreen;