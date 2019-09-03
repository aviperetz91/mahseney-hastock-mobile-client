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
            headerTitle: "מוצרים",
            headerRight: 
                <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item 
                        title="Cart"
                        iconName="shopping-cart"
                        onPress={() => navigation.navigate("CartScreen")}
                    />
                </HeaderButtons>
        }
    }

    render() {
        return (
            <FlatList 
                data={this.props.products}
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