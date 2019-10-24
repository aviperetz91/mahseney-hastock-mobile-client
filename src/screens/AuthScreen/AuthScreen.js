import React, { Component } from 'react';
import { View, Text, TextInput, Button, Alert, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../../components/HeaderButton';
import styles from './style';
import Colors from '../../constants/Colors';
import * as authActions from '../../store/actions/authActions';

class AuthScreen extends Component {

    static navigationOptions = ({navigation}) => {
        return {
            headerTitle: "התחברות / הרשמה",
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

    state = {
        isSignup: false,
        email: "",
        emailIsValid: false,
        password: "",
        passwordIsValid: false,
    }

    authHandler = () => {
        if(!this.state.emailIsValid && this.state.isSignup) {
            Alert.alert("שגיאה", "אנא הזן כתובת חוקית", [{text: "בסדר, הבנתי."}])
            return;
        }
        if(!this.state.passwordIsValid && this.state.isSignup) {
            Alert.alert("שגיאה", "אנא הזן סיסמא חוקית", [{text: "בסדר, הבנתי."}])
            return;
        }
        if(this.state.isSignup) {
            // this.props.onLoading();
            this.props.signupHandler(this.state.email, this.state.password);
        }
        // this.props.onLoading();
        this.props.loginHandler(this.state.email, this.state.password);
    }

    emailChangeHandler = input => {
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(!reg.test(input)) {
            this.setState({emailIsValid: false})
        }
        else{
            this.setState({emailIsValid: true})
        }
        this.setState({email: input})
    }

    passwordChangeHandler = input => {
        if(input.length < 6) {
            this.setState({passwordIsValid: false})
        }
        else{
            this.setState({passwordIsValid: true})
        }
        this.setState({password: input})
    }
        
    render() {

        return (
            <View style={styles.form}>
                <View style={styles.formControl}>
                    <TextInput 
                        style={styles.input}
                        placeholder="כתובת מייל"
                        value={this.state.email}
                        onChangeText={ input => this.emailChangeHandler(input)}
                        keyboardType="email-address"
                    />
                    {!this.state.emailIsValid && this.state.isSignup ? 
                        <Text style={styles.errorMessage}>
                            אנא הזן כתובת חוקית (למשל - username@gmail.com)
                        </Text> : null}
                </View> 
                <View style={styles.formControl}>
                    <TextInput 
                        style={styles.input}
                        placeholder="סיסמא"
                        value={this.state.password}
                        onChangeText={ input => this.passwordChangeHandler(input)}
                        secureTextEntry
                    />
                    {!this.state.passwordIsValid && this.state.isSignup ? 
                        <Text style={styles.errorMessage}>
                            הסיסמא צריכה להכיל לפחות 6 תווים
                        </Text> : null}
                </View>
                <View style={styles.buttonsContainer}>
                    <View style={styles.button}>
                        {this.props.isLoading ? <ActivityIndicator size="small" color={Colors.primary} /> : 
                        <Button 
                            title={this.state.isSignup ? "הרשם" : "התחבר"}
                            color={Colors.primary}
                            onPress={this.authHandler}
                        />}
                    </View>
                    <View style={styles.button}>
                        <Button 
                            title={this.state.isSignup ? "רשום? עבור למצב התחברות" : "משתמש חדש? עבור למצב הרשמה"}
                            color={Colors.warning}
                            onPress={() => {
                                const toggle = !this.state.isSignup;
                                this.setState({isSignup: toggle});
                            }}
                        />
                    </View> 
                </View>
            </View> 
        )
    }
}

mapStateToProps = state => {
    return {
        isLoading: state.auth.isLoading,
    }
}

mapDispatchToProps = dispatch => {
    return {
        onLoading: () => dispatch(authActions.isLoadingTrue()),
        signupHandler: (email, password) => dispatch(authActions.signup(email, password)),
        loginHandler: (email, password) => dispatch(authActions.login(email, password))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthScreen);