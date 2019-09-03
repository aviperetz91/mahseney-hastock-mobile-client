import React, { Component } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome5';

import Colors from '../../constants/Colors';
import styles from './style';
import CartItem from '../../components/CartItem';

class CartScreen extends Component {

    static navigationOptions = {
        headerTitle: "העגלה שלי"
    }

    render() {
        return(
            <View style={styles.screen}>
                <View style={styles.summary}>
                    <Text style={styles.summaryText}>
                        סה"כ:<Text style={styles.amount}>   {this.props.totalAmount} <Icon size={15} name="shekel-sign" color={Colors.primary}  /></Text>
                    </Text>
                    <Button disabled={this.props.items.length === 0} color={Colors.warning} title="הזמן עכשיו" />
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
                                onRemove={() => {}}
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
        totalAmount: state.cart.totalAmount
    }
}

export default connect(mapStateToProps, null)(CartScreen);


{/* <Button title="check" onPress={() => console.log(this.props.totalAmount)} /> */}