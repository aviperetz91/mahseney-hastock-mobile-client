import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import styles from './style';
import Colors from '../../constants/Colors';
import CartItem from '../CartItem';

class OrderItem extends Component {

    state = {
        showDetails: false
    }

    // displayDetails = () => {
    //     if (this.state.showDetails){
    //         return (
    //             <View style={styles.itemContainer}>
    //                 {this.props.items.map(cartItem => (
    //                     <CartItem 
    //                         key={cartItem.id}
    //                         quantity={cartItem.quantity}
    //                         amount={cartItem.sum}
    //                         title={cartItem.title}
    //                         image={cartItem.image}
    //                     />
    //                 )
    //                 )}
    //             </View>
    //         )
    //     }
    //     else return;
    // }

    render() {
        let display;
        if(this.state.showDetails){
            display = 
                <View style={styles.itemContainer}>
                    {this.props.items.map(cartItem => (
                    <CartItem 
                        key={cartItem.id}
                        quantity={cartItem.quantity}
                        amount={cartItem.sum}
                        title={cartItem.title}
                        image={cartItem.image}
                    />
                ))} 
                </View>
        }
        return (
            <View style={styles.orderItem}> 
                <View style={styles.summary}>
                    <Text style={styles.totalAmount}>
                        <Icon name="shekel-sign" size={14}/> {this.props.amount.toFixed(2)}
                    </Text>
                    <Text style={styles.date}>{this.props.date}</Text>
                </View>
                <View>
                    <Button 
                        title={this.state.showDetails ? "הסתר פריטים" : "הצג פריטים"}
                        color={Colors.warning} 
                        onPress={() => {
                            const toggleShowDetails = !this.state.showDetails;
                            this.setState({showDetails: toggleShowDetails})
                        }}/>
                    {display}
                </View>
            </View>
        )
    }
   
}

export default OrderItem;