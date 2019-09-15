import React, { Component } from 'react';
import { FlatList, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import styles from './style';
import * as cartActions from '../../store/actions/cartActions';
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
        productsByCategory: this.props.products.filter(
            product => product.category === this.props.navigation.getParam("categoryTitle")
        ),
        productsBySearch: this.props.products.filter(
            product => product.category === this.props.navigation.getParam("categoryTitle")
        )
    }

    componentDidMount = () => {
        this.props.navigation.setParams({toggle: this.toggleSearchControl})
    }

    toggleSearchControl = () => {
        toggle = !this.state.searchControl;
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
        if (userInput === "") {
            this.setState({
                productsBySearch: this.state.productsByCategory
            })
        }
        else {
            const searchRes = this.state.productsByCategory.filter(product => {
                return product.title.includes(userInput)
            })
            this.setState({
                productsBySearch: searchRes
            })
        }
    }

    render() {
        return (
            <ScrollView contentContainerStyle={styles.screen}>
                {this.displaySearchBar()}
                <FlatList 
                    data={this.state.productsBySearch}
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
                                onAddToCart={() => this.props.onAddToCart(product.item)}
                            />
                        )
                    }}
                />
            </ScrollView>
        )
    }
}

mapStateToProps = state => {
    return {
        products: state.products.products
    }
}

mapDispatchToProps = dispatch => {
    return {
        onAddToCart: product => dispatch(cartActions.addToCart(product))  // dispatch({type: ACTION_NAME, payload})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsScreen);