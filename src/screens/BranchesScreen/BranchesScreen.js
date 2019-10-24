import React, { Component } from 'react';
import { View } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../../components/HeaderButton';
import styles from './style';
import MyCarousel from '../../components/MyCarousel';
import { BRANCHES } from '../../data/temp-data';

class BranchesScreen extends Component {

    static navigationOptions = ({navigation}) => {
        return {
            headerTitle: "סניפים",
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
                </HeaderButtons>,
        } 
    }

    render() {
        return (
            <View style={styles.branch}>
                <MyCarousel data={BRANCHES} layout="default"/>
            </View>
        )
    }
}

export default BranchesScreen;

