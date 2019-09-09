import React from 'react';
import { View, Text } from 'react-native';

import styles from './style';
import Card from '../Card';

const BranchItem = props => {
    return (
        <Card style={styles.branchItem}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{props.title}</Text>
            </View>
            <View style={styles.locationContainer}>
                <View style={styles.location}>
                    <Text></Text>
                </View>
            </View>
            <View style={styles.addressContainer}>
                <Text style={styles.address}>{props.address}</Text>
            </View>
        </Card>
    )
}

export default BranchItem;