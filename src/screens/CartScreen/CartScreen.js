import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';

class CartScreen extends Component {
    render() {
        return(
            <Button title="check" onPress={() => console.log(this.props.totalAmount)} />
        )
    }
}

mapStateToProps = state => {
    return {
        items: state.cart.items,
        totalAmount: state.cart.totalAmount
    }
}

export default connect(mapStateToProps, null)(CartScreen);