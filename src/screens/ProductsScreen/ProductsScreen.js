import React, { Component } from 'react';
import { View, Text, FlatList, ScrollView, ActivityIndicator, Button, Alert } from 'react-native';
import { connect } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import styles from './style';
import Colors from '../../constants/Colors';
import * as cartActions from '../../store/actions/cartActions';
import * as productsActions from '../../store/actions/productsActions';
import HeaderButton from '../../components/HeaderButton';
import ProductItem from '../../components/ProductItem';
import SearchBar from '../../components/SearchBar';


class ProductsScreen extends Component {

    static navigationOptions = ({navigation}) => {
        return {
            headerTitle: navigation.getParam("categoryTitle"),
            headerRight: 
                <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item 
                        title="Search"
                        iconName="search"
                        onPress={navigation.getParam("toggle")}
                    />
                </HeaderButtons>,
        }
    }

    state = {
        searchControl: false,
        input: "",
    }

    componentDidMount = () => {
        this.props.onLoading();
        this.props.loadProducts();
        this.props.navigation.setParams({toggle: this.toggleSearchControl});

    }

    toggleSearchControl = () => {
        const toggle = !this.state.searchControl;
        this.setState({searchControl: toggle})
    }

    displaySearchBar = () => {
        if (this.state.searchControl) {
            return (
                <SearchBar
                    placeholder="הזן מוצר לחיפוש"
                    search={this.searchHandler}/>
            )
        }
        return;
    }

    searchHandler = userInput => {
        this.setState({input: userInput})
    }


    render() {
        const productsByCategory = this.props.products.filter(product => 
            product.category === this.props.navigation.getParam("categoryTitle")
        );

        const productsBySearch = productsByCategory.filter(product => 
            product.title.includes(this.state.input)
        )

        if(this.props.isLoading) {
            return (
                <View style={styles.centered}>
                    <ActivityIndicator size="large" color={Colors.primary} />
                </View>
            )
        }

        if(!this.props.isLoading && productsByCategory.length === 0) {
            return (
                <View style={styles.centered}>
                    <Text>לא נמצאו מוצרים</Text>
                </View>
            )
        }

        return (
            <ScrollView contentContainerStyle={styles.screen}>
                {this.displaySearchBar()}
                {productsBySearch.length === 0 ?
                    <View style={styles.message}>
                        <Text>לא נמצאו מוצרים התואמים את מילת החיפוש: </Text>
                        <Text>"{this.state.input}"</Text>
                        <View style={styles.button}>
                            <Button 
                                title="חזור לשאר המוצרים"
                                color={Colors.primary}
                                onPress={() => this.searchHandler("")}    
                            />
                        </View>
                    </View>
                    :
                    <FlatList 
                        data={productsBySearch}
                        keyExtractor={product => product.id}
                        renderItem={product => {
                            return (
                                <ProductItem 
                                    image={product.item.imageUrl}
                                    title={product.item.title}
                                    price={product.item.price}
                                    onViewDetails={() => this.props.navigation.navigate("ProductDetailsScreen", {
                                        id: product.item.id,
                                        title: product.item.title
                                    })}
                                    onAddToCart={() => {
                                        this.props.onAddToCart(product.item)
                                        Alert.alert("חדש בעגלה", "הוספת את המוצר לעגלה.", [{text: "המשך לקנות"}]);
                                    }}
                                /> 
                            )
                        }}
                    />}
            </ScrollView>
        )
    }
}

mapStateToProps = state => {
    return {
        products: state.products.products,
        isLoading: state.products.isLoading
    }
}

mapDispatchToProps = dispatch => {
    return {
        onAddToCart: product => dispatch(cartActions.addToCart(product)),  // dispatch({type: ACTION_NAME, payload})
        loadProducts: () => dispatch(productsActions.fetchProducts()),
        onLoading: () => dispatch(productsActions.isLoadingTrue())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsScreen);