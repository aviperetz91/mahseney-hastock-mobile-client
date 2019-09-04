import React, { Component } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome5';

import * as cartActions from '../../store/actions/cartActions';
import * as ordersActions from '../../store/actions/ordersActions';
import Colors from '../../constants/Colors';
import styles from './style';
import CartItem from '../../components/CartItem';

class CartScreen extends Component {

    static navigationOptions = {
        headerTitle: "העגלה שלי"
    }

    render() {
        let total = this.props.totalAmount;
        if(total < 0) {
            total = 0.00
        }
            
        return(
            <View style={styles.screen}>
                <View style={styles.summary}>
                    <Text style={styles.summaryText}>
                        סה"כ:<Text style={styles.amount}>   {total.toFixed(2)} <Icon size={15} name="shekel-sign" color={Colors.primary}  /></Text>
                    </Text>
                    <Button 
                        title="הזמן עכשיו"
                        disabled={this.props.items.length === 0} 
                        color={Colors.warning}
                        onPress={() => this.props.onAddOrder(this.props.items, this.props.totalAmount)}
                    />
                </View>
                <FlatList 
                    data={this.props.items}
                    keyExtractor={cartItem => cartItem.id}
                    renderItem={cartItem => {
                        return (
                            <CartItem 
                                quantity={cartItem.item.quantity}
                                title={cartItem.item.title}
                                amount={cartItem.item.sum}
                                image={cartItem.item.image}
                                onRemove={() => this.props.onRemoveFromCart(cartItem.item)}
                            />
                        )
                    }}   
                />
            </View>
        )
    }
}

mapStateToProps = state => {
    return {
        items: state.cart.items,
        totalAmount: state.cart.totalAmount,
        orders: state.orders.orders
    }
}

mapDispatchToProps = dispatch => {
    return {
        onRemoveFromCart: item => dispatch(cartActions.removeFromCart(item)), // dispatch({type: ACTION_NAME, payload})
        onAddOrder: (items, totalAmount) => dispatch(ordersActions.addOrder(items, totalAmount))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartScreen);