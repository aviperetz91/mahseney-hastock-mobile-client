import React, { Component } from 'react';
import { View, Text, Button, FlatList, ActivityIndicator, Alert } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome5';

import * as cartActions from '../../store/actions/cartActions';
import * as ordersActions from '../../store/actions/ordersActions';
import Colors from '../../constants/Colors';
import styles from './style';
import CartItem from '../../components/CartItem';
import Card from '../../components/Card';

class CartScreen extends Component {

    static navigationOptions = {
        headerTitle: "העגלה שלי",
    }

    componentDidMount = () => {
        // this.props.onLoading();
        this.props.loadItems();
    }

    componentDidUpdate = (prevProps) => {
        if(this.props.userId !== prevProps.userId) {
            // this.props.onLoading();
            this.props.loadItems();
        }
    }

    orderButtonPressHandler = () => {
        this.props.addOrderLoading();
        this.props.onAddOrder(this.props.items, this.props.totalAmount);
        this.props.resetCart();
        Alert.alert("הזמנה חדשה", "ההזמנה בוצעה בהצלחה. על מנת לצפות בפרטי ההזמנה עבור ללשונית 'הזמנות'.", [{text: "הבנתי"}]);
    }

    render() {
        
        let total = this.props.totalAmount;
        if(total < 0) {
            total = 0.00
        }

        if(this.props.isLoading) {
            return (
                <View style={styles.centered}>
                    <ActivityIndicator size="large" color={Colors.primary} />
                </View>
            )
        }

        if(!this.props.userId) {
            return (
                <View style={styles.centered}>
                    <Text size="large" color={Colors.primary}>
                        התחבר למערכת על מנת לצפות בעגלת הקניות שלך
                    </Text>
                </View>
            )
        }

        return(
            <View style={styles.screen}>
                <Card style={styles.summary}>
                    <Text style={styles.summaryText}>
                        סה"כ:<Text style={styles.amount}>   {total.toFixed(2)} <Icon size={15} name="shekel-sign" color={Colors.primary}  /></Text>
                    </Text>
                    <Button 
                        title="הזמן עכשיו"
                        disabled={this.props.items.length === 0} 
                        color={Colors.warning}
                        onPress={this.orderButtonPressHandler}
                    />
                </Card>
                {this.props.addedOrder ?
                    <View style={styles.centered}>
                        <ActivityIndicator size="large" color={Colors.primary} />
                    </View>
                    :
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
                                    deleteable={true}
                                    onRemove={() => this.props.onRemoveFromCart(cartItem.item)}
                                />
                            )
                        }}   
                    />}
            </View>
        )
    }
}

mapStateToProps = state => {
    return {
        isLoading: state.cart.isLoading,
        items: state.cart.items,
        totalAmount: state.cart.totalAmount,
        addedOrder: state.orders.addedOrder,
        userId: state.auth.userId
    }
}

mapDispatchToProps = dispatch => {
    return {
        loadItems: () => dispatch(cartActions.fetchItems()),
        onLoading: () => dispatch(cartActions.isLoadingTrue()),
        onRemoveFromCart: item => dispatch(cartActions.removeFromCart(item)), // dispatch({type: ACTION_NAME, payload})
        onAddOrder: (items, totalAmount) => dispatch(ordersActions.addOrder(items, totalAmount)),
        addOrderLoading: () => dispatch(ordersActions.addOrderLoading()),
        resetCart: () => dispatch(cartActions.resetCart())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartScreen);