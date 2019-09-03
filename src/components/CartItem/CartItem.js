import React from 'react';
import { View, Text, Image, Button, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import styles from './style';
import Colors from '../../constants/Colors';

const CartItem = (props) => {
    return (
        <View style={styles.cartItem}>
            <View style={styles.contentContainer}>
                <Image style={styles.image} source={{uri: props.image}} />
                <Text style={styles.quantity}>{props.quantity} </Text>
                <Text style={styles.text}>  {props.title}</Text>
            </View>
            <View style={styles.contentContainer}>
                <Text style={styles.text}><Icon name="shekel-sign" size={12}/> {props.amount}</Text>
                <TouchableOpacity onPress={props.onRemove} style={styles.deleteButton}>
                    <Icon name="trash" size={23} color={Colors.danger} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CartItem;