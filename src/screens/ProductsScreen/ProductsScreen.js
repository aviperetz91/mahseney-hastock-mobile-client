import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../../components/HeaderButton';
import ProductItem from '../../components/ProductItem';
import * as cartActions from '../../store/actions/cartActions';

class ProductsScreen extends Component {

    static navigationOptions = ({navigation}) => {
        return {
            headerTitle: navigation.getParam("categoryTitle"),
            headerRight: 
                <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item 
                        title="Cart"
                        iconName="search"
                        onPress={() => {}}
                    />
                </HeaderButtons>,
        }
    }

    render() {
        const category = this.props.navigation.getParam("categoryTitle");
        const products = this.props.products.filter(prod => prod.category === category )
        return (
            <FlatList 
                data={products}
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