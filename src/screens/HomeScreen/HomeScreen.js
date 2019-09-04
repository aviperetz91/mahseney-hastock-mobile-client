import React, { Component } from 'react';
import { FlatList, View, Text } from 'react-native';

import styles from './style';
import { CATEGORIES } from '../../data/temp-data';
import CategoryBox from '../../components/CategoryBox';

class HomeScreen extends Component {

    static navigationOptions = {
        headerTitle: "מחסני הסטוק",
        headerTitleStyle: {
            fontSize: 30,
            fontWeight: "bold",
            flex: 1,
            textAlign: "center"
        }
    }

    render() {
        return (
                <View style={styles.screen}>
                    {/* <View style={styles.welcomTextContainer}>
                        <Text style={styles.welcomText}>ברוכים הבאים למחסני הסטוק</Text>
                        <Text style={styles.welcomText}>כל מה שצריך לבית.</Text>
                        <Text style={styles.welcomText}>מוצרים גדולים במחירים קטנים!</Text>
                    </View> */}
                    <FlatList 
                        numColumns={3}
                        data={CATEGORIES}
                        keyExtractor={category => category.id}
                        renderItem={category => {
                            return (
                                <CategoryBox 
                                    title={category.item.title}
                                    iconName={category.item.iconName}
                                    onSelect={() => this.props.navigation.navigate("ProductsScreen",{
                                        categoryTitle: category.item.title
                                    })}
                                />
                            )
                        }}
                    />
                </View>  
        )
    }
}

export default HomeScreen;