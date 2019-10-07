import React, { Component } from 'react';
import { ScrollView, View, Text, Image, Button, Alert } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome5';

import styles from './style';
import Colors from '../../constants/Colors';
import Card from '../../components/Card';
import * as cartActions from '../../store/actions/cartActions';
import * as productsActions from '../../store/actions/productsActions';

class ProductDeatailsScreen extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: navigation.getParam("title"),
        }
    }

    deleteHandler = productId => {
        Alert.alert("מחיקת מוצר", "האם אתה בטוח שברצונך למחור את המוצר?",
            [
                {text: "לא!!", style: "negative" },
                {
                    text: "כן, רוצה למחוק",
                    onPress: () => {
                        this.props.onDeleteProduct(productId)
                        this.props.navigation.goBack();
                    }
                }
            ]
        )
    }

    render() {
        const productId = this.props.navigation.getParam("id");
        const selectedProduct = this.props.products.find(product => product.id === productId);
        const copiedProduct = {...selectedProduct}
        return (
            <ScrollView style={styles.container}>
                <Card style={styles.imageContainer}>
                    <Image style={styles.image} source={{uri: copiedProduct.imageUrl}}/>
                </Card>
                <Text style={styles.price}> <Icon name="shekel-sign" color="#888" size={20}/> {copiedProduct.price}</Text>
                <Text style={styles.description}>
                    {copiedProduct.description}
                </Text>
                <View style={styles.buttonsContainer}>
                    <View style={styles.button}>
                        <Button 
                            color={Colors.warning} 
                            title="ערוך" 
                            onPress={() => this.props.navigation.navigate("EditProductScreen", {
                                id: copiedProduct.id
                            }
                        )}/>
                    </View>
                    <View style={styles.button}>
                        <Button 
                            color={Colors.primary} 
                            title="הוסף לעגלה" 
                            onPress={() => {
                                this.props.onAddToCart(copiedProduct);
                                Alert.alert("חדש בעגלה", "הוספת את המוצר לעגלה.", [{text: "המשך לקנות"}]);
                            }}/>
                    </View>
                    <View style={styles.button}>
                        <Button 
                            color={Colors.danger} 
                            title="מחק" 
                            onPress={() => this.deleteHandler(productId)}/>
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

mapDispatchToProps = dispatch => {
    return {
        onAddToCart: product => dispatch(cartActions.addToCart(product)), // dispatch({type: ACTION_NAME, payload})
        onDeleteProduct: productId => dispatch(productsActions.deleteProduct(productId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDeatailsScreen);