import React from 'react';
import { TouchableOpacity, View, Text, Image, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import styles from './style';
import Colors from '../../constants/Colors';
import Card from '../Card';

const ProductItem = props => {
    return (
        <TouchableOpacity activeOpacity={0.5} onPress={props.viewDetails}>
            <Card style={styles.product}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={{uri: props.image}} />
                </View>
                <View style={styles.contentContainer}>
                    <View style={styles.textContainer}>
                        <Text style={styles.title}>{props.title}</Text>
                        <Text style={styles.price}><Icon name="shekel-sign" color="#888" size={12}/> {props.price}</Text>
                    </View>
                    <View style={styles.buttonsContainer}>
                        <View style={styles.button}>
                            <Button color={Colors.primary} title="הוסף לעגלה" onPress={props.onAddToCart} />
                        </View>
                        <View style={styles.button}>
                            <Button color={Colors.warning} title="קנה עכשיו" onPress={props.onBuyNow} />
                        </View>
                    </View>
                </View>
            </Card>
        </TouchableOpacity>
    )
}

export default ProductItem;