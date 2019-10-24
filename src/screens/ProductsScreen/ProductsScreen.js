import React, { Component } from 'react';
import { View, Text, FlatList, ScrollView, ActivityIndicator, Button, Alert } from 'react-native';
import { connect } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../../components/HeaderButton';
import CartItem from '../../models/cart-item';
import styles from './style';
import Colors from '../../constants/Colors';
import * as cartActions from '../../store/actions/cartActions';
import * as productsActions from '../../store/actions/productsActions';
import * as ordersActions from '../../store/actions/ordersActions';
import ProductItem from '../../components/ProductItem';
import SearchBar from '../../components/SearchBar';


class ProductsScreen extends Component {

    static navigationOptions = ({navigation}) => {
        return {
            headerTitle: navigation.getParam("categoryTitle"),
            headerRight: 
                <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item 
                        title="Cart"
                        iconName="shopping-cart"
                        onPress={() => navigation.navigate("CartScreen")}
                    />,
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
        this.props.loadCartItems();
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

    addToCartHandler = (product) => {
        if(this.props.userId) {
            this.props.onAddToCart(product)
            Alert.alert("חדש בעגלה", "הוספת את המוצר לעגלה.", 
            [
                {text: "המשך לקנות"},
                {text: "גש לעגלה", onPress: () => this.props.navigation.navigate("CartScreen")}
            ]
            );
        }
        else {
            Alert.alert("שגיאה", "עליך להיות מחובר על מנת להוסיף מוצר לעגלה", 
            [
                {text: "מאוחר יותר"},
                {text: "התחבר/הרשם", onPress: () => this.props.navigation.navigate("AuthScreen")}
            ]
            );
        } 
    }

    

    buyNowHandler = (product) => {
        if(this.props.userId) {
            const item = new CartItem(
                product.id,
                1,
                product.price,
                product.title,
                product.price,
                product.imageUrl
            )
            const arrayOfOneItem = [];
            arrayOfOneItem.push(item);
            this.props.onAddOrder(arrayOfOneItem, item.price);
        }
        else {
            Alert.alert("שגיאה", "עליך להיות מחובר על מנת לרכוש את המוצר", 
            [
                {text: "מאוחר יותר"},
                {text: "התחבר/הרשם", onPress: () => this.props.navigation.navigate("AuthScreen")}
            ]
            );
        }
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
                                    viewDetails={() => this.props.navigation.navigate("ProductDetailsScreen", {
                                        id: product.item.id,
                                        title: product.item.title
                                    })}
                                    onBuyNow={() => this.buyNowHandler(product.item)}
                                    onAddToCart={() => this.addToCartHandler(product.item)}
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
        isLoading: state.products.isLoading,
        userId: state.auth.userId
    }
}

mapDispatchToProps = dispatch => {
    return {
        loadProducts: () => dispatch(productsActions.fetchProducts()),  // dispatch({type: ACTION_NAME, payload})
        onLoading: () => dispatch(productsActions.isLoadingTrue()),
        loadCartItems: () => dispatch(cartActions.fetchItems()),
        onAddToCart: product => dispatch(cartActions.addToCart(product)),  
        onAddOrder: (items, totalAmount) => dispatch(ordersActions.addOrder(items, totalAmount))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsScreen);