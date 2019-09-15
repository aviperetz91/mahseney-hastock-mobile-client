import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import styles from './style';

const Button = (props) => {
    return (
        <TouchableOpacity onPress={props.press} style={styles.button}>
            <Text style={styles.buttonText}>
                {props.children}
            </Text>
        </TouchableOpacity> 
    )
}

export default Button;