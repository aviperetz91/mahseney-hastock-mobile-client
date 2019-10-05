import React, {Component} from 'react';
import { View, TextInput } from 'react-native';

import styles from './style';
import Button from '../Button';


class SearchBar extends Component{
    state = {
        userInput: "",
    }

    render(){
        return(
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    value={this.state.userInput}
                    placeholder={this.props.placeholder}
                    onChangeText={(input) => this.setState({userInput: input})}
                ></TextInput>
                <Button
                    style={styles.button}
                    press={() => {
                        this.setState({userInput: ""});
                        this.props.search(this.state.userInput)}
                    }
                >
                    חפש
                </Button>
            </View>
        )
    }
}

export default SearchBar;