import React, { Component } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../../components/HeaderButton';
import * as cartActions from '../../store/actions/cartActions';
import * as ordersActions from '../../store/actions/ordersActions';
import Colors from '../../constants/Colors';
import styles from './style';
import CartItem from '../../components/CartItem';
import Card from '../../components/Card';

class CartScreen extends Component {

    static navigationOptions = ({navigation}) => {
        return {
            headerTitle: "העגלה שלי",
            headerLeft: 
                <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item 
                        title="Menu"
                        iconName="bars"
                        onPress={() => navigation.toggleDrawer()}
                    />
                </HeaderButtons>,
        }
        
    }

    render() {
        let total = this.props.totalAmount;
        if(total < 0) {
            total = 0.00
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
                        onPress={() => this.props.onAddOrder(this.props.items, this.props.totalAmount)}
                    />
                </Card>
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
                />
            </View>
        )
    }
}

mapStateToProps = state => {
    return {
        items: state.cart.items,
        totalAmount: state.cart.totalAmount,
    }
}

mapDispatchToProps = dispatch => {
    return {
        onRemoveFromCart: item => dispatch(cartActions.removeFromCart(item)), // dispatch({type: ACTION_NAME, payload})
        onAddOrder: (items, totalAmount) => dispatch(ordersActions.addOrder(items, totalAmount))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartScreen);