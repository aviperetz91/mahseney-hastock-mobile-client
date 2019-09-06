import React, { Component } from 'react';
import { FlatList, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../../components/HeaderButton';
import OrderItem from '../../components/OrderItem/OrderItem';


class OrdersScreen extends Component {

    static navigationOptions = ({navigation}) => {
        return {
            headerTitle: "ההזמנות שלי",
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
            <FlatList 
                data={this.props.orders}
                keyExtractor={order => order.id}
                renderItem={order => {
                    return (
                        <OrderItem 
                            amount={order.item.totalAmount}
                            date={order.item.readableDate}
                            items={order.item.items}
                        />
                    )
                }}
            />
        )
    }
}

const mapStateToProps = state => {
    return {
        orders: state.orders.orders
    }
}

export default connect(mapStateToProps, null)(OrdersScreen);