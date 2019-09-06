import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../../components/HeaderButton';
import styles from './style';
import LogoTitle from '../../components/LogoTitle';
import MyCarousel from '../../components/MyCarousel';


class HomeScreen extends Component {

    static navigationOptions = ({navigation}) => {
        return {
            headerTitle: <LogoTitle />,
            headerTitleStyle: {
                fontSize: 32,
                fontWeight: "bold",
            },
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

    render() {
        return (
            <ScrollView contentContainerStyle={styles.screen}>
                <View style={styles.slider}>
                    <MyCarousel layout={'default'}/>
                </View>
                
            </ScrollView>  
        )
    }
}

export default HomeScreen;