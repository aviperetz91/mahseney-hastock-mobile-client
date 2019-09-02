import React, { Component } from 'react';
import { FlatList, View, Text } from 'react-native';
import { connect } from 'react-redux';

import ProductItem from '../../components/ProductItem';

class ProductsScreen extends Component {

    static navigationOptions = {
        headerTitle: "מוצרים"
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
                            onAddToCart={() => {}}
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

export default connect(mapStateToProps, null)(ProductsScreen);