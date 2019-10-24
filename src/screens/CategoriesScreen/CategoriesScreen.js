import React, { Component } from 'react';
import { FlatList, View } from 'react-native';   
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../../components/HeaderButton';
import styles from './style';
import { CATEGORIES } from '../../data/temp-data';
import CategoryBox from '../../components/CategoryBox';

class CategoriesScreen extends Component {

    static navigationOptions = ({navigation}) => {
        return {
            headerTitle: "קטגוריות",
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
            <View style={styles.screen}>
                <FlatList 
                    numColumns={2}
                    data={CATEGORIES}
                    keyExtractor={category => category.id}
                    renderItem={category => {
                        return (
                            <CategoryBox 
                                title={category.item.title}
                                iconName={category.item.iconName}
                                color={category.item.color}
                                onSelect={() => this.props.navigation.navigate("ProductsScreen",{
                                    categoryTitle: category.item.title
                                })}
                            />
                        )
                    }}
                /> 
            </View>
        )
    }
}

export default CategoriesScreen;