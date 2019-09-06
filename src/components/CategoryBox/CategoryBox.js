import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import styles from './style';

const CategoryBox = (props) => {
    return (
        <TouchableOpacity style={{...styles.gridItem, backgroundColor: props.color}} onPress={props.onSelect} activeOpacity={0.6} >
            <View style={styles.boxContainer}>
                <Icon name={props.iconName} size={60} color="white" />
            
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{props.title}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default CategoryBox;