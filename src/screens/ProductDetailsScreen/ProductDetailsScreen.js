import React, { Component } from 'react';
import { ScrollView, View, Text, Image, Button } from 'react-native';
import { connect } from 'react-redux';

import styles from './style';
import Colors from '../../constants/Colors';

class ProductDeatailsScreen extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: navigation.getParam("title"),
        }
    }

    render() {
        const productId = this.props.navigation.getParam("id");
        const selectedProduct = this.props.products.find(product => product.id === productId);
        return (
            <ScrollView>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={{uri: selectedProduct.imageUrl}}/>
                </View>
                <Text style={styles.price}>{selectedProduct.price} ש"ח</Text>
                <Text style={styles.description}>{selectedProduct.description}</Text>
                <View style={styles.buttonsContainer}>
                    <View style={styles.button}>
                        <Button color={Colors.primary} title="הוסף לעגלה" onPress={() => {}}/>
                    </View>
                    <View style={styles.button}>
                        <Button color={Colors.warning} title="ערוך" onPress={() => {}}/>
                    </View>
                    <View style={styles.button}>
                        <Button color={Colors.danger} title="מחק" onPress={() => {}}/>
                    </View>
                </View>
            </ScrollView>
            
        )
    }
}

mapStateToProps = state => {
    return {
        products: state.products.products
    }
}

export default connect(mapStateToProps, null)(ProductDeatailsScreen);