import React from 'react';
import { View, Text, Image, Button } from 'react-native';

import styles from './style';
import Colors from '../../constants/Colors';

const ProductItem = props => {
    return (
        <View style={styles.body}>
            <View style={styles.product}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={{uri: props.image}} />
                </View>
                <View style={styles.contentContainer}>
                    <View style={styles.textContainer}>
                        <Text style={styles.title}>{props.title}</Text>
                        <Text style={styles.price}>{props.price} ש"ח</Text>
                    </View>
                    <View style={styles.buttonsContainer}>
                        <View style={styles.button}>
                            <Button color={Colors.primary} title="פרטים" onPress={props.onViewDetails} />
                        </View>
                        <View style={styles.button}>
                            <Button color={Colors.primary} title="הוסף לעגלה" onPress={props.onAddToCart} />
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default ProductItem;