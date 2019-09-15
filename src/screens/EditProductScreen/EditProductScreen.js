import React, { Component } from 'react';
import { ScrollView, View, Text, TextInput, Picker, Button, Alert } from 'react-native';
import { connect } from 'react-redux';

import * as productsActions from '../../store/actions/productsActions';
import styles from './style';
import Colors from '../../constants/Colors';

class EditProductScreen extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: navigation.getParam("id") ? "ערוך מוצר" : "הוסף מוצר",
        }
    }
    
    prodId = this.props.navigation.getParam("id");
    editProduct = this.props.products.find(product => product.id === this.prodId);

    state = {
        category: "",
        title: this.editProduct ? this.editProduct.title : "",
        imageUrl: this.editProduct ? this.editProduct.imageUrl : "",
        price: this.editProduct ? this.editProduct.price.toString() : "",
        description: this.editProduct ? this.editProduct.description : ""
    }

    submitHandler = () => {
        if(this.editProduct) {
            this.props.onUpdateProduct({
                category: this.editProduct.category,
                id: this.prodId,
                title: this.state.title,
                imageUrl: this.state.imageUrl,
                price: +this.state.price,
                description: this.state.description
            })
            Alert.alert("עדכון מוצר", "עדכנת את המוצר בהצלחה", [{text: "המשך"}])
        }
        else {
            this.props.onCreateProduct({
                category: this.state.category,
                title: this.state.title,
                imageUrl: this.state.imageUrl,
                price: +this.state.price,
                description: this.state.description 
            })
            Alert.alert("מוצר חדש", "הוספת את המוצר בהצלחה", [{text: "המשך"}])
        }  
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.form}>
                    {!this.editProduct ? 
                    <View style={styles.pickerContainer}>
                        <Text style={styles.label}>קטגוריה</Text>
                        <Picker
                            selectedValue={this.state.category}
                            style={{height: 50, width: 300}}
                            onValueChange={(itemValue, itemIndex) =>
                                this.setState({category: itemValue})
                            }>
                            <Picker.Item label="כלי פלסטיק" value="כלי פלסטיק" />
                            <Picker.Item label="חד פעמי" value="חד פעמי" />
                            <Picker.Item label="מטבח ואפייה" value="מטבח ואפייה" />
                            <Picker.Item label="כלי עבודה" value="כלי עבודה" />
                            <Picker.Item label="מוצרי ניקיון" value="מוצרי ניקיון" />
                            <Picker.Item label="מוצרי חשמל" value="מוצרי חשמל" />
                            <Picker.Item label="ריהוט ונוי" value="ריהוט ונוי" />
                            <Picker.Item label="אמבט" value="אמבט" />
                            <Picker.Item label="טקסטיל" value="טקסטיל" />
                            <Picker.Item label="צעצועים" value="צעצועים" />
                        </Picker>
                    </View> : null}
                    <View style={styles.formControl}>
                        <TextInput 
                            style={styles.input}
                            placeholder="שם"
                            value={this.state.title}
                            onChangeText={ input => this.setState({title: input})}
                        />
                    </View>
                    <View style={styles.formControl}>
                        <TextInput 
                            style={styles.input}
                            placeholder="קישור תמונה"
                            value={this.state.imageUrl}
                            onChangeText={ input => this.setState({imageUrl: input})}
                        />
                    </View>
                    <View style={styles.formControl}>
                        <TextInput 
                            style={styles.input}
                            placeholder= "מחיר"
                            value={this.state.price}
                            onChangeText={ input => this.setState({price: input})}
                        />
                    </View>
                    <View style={styles.formControl}>
                        <TextInput 
                            style={styles.input}
                            placeholder="תיאור"
                            multiline={true}
                            numberOfLines={3}
                            value={this.state.description}
                            onChangeText={ input => this.setState({description: input})}
                        />
                    </View>
                    <View style={styles.buttonContainer}>
                        <Button 
                            title="שמור"
                            color={Colors.primary}
                            onPress={this.submitHandler}
                        />
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
        onCreateProduct: product => dispatch(productsActions.createProduct(product)),
        onUpdateProduct: product => dispatch(productsActions.updateProduct(product))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProductScreen);