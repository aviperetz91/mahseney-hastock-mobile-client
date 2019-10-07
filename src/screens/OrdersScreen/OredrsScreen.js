import React, { Component } from 'react';
import { FlatList, View, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import styles from './style';
import Colors from '../../constants/Colors';
import * as ordersActions from '../../store/actions/ordersActions'
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

    componentDidMount = () => {
        this.props.onLoading();
        this.props.loadOrders();
    }

    render() {

        if(this.props.isLoading) {
            return (
                <View style={styles.centered}>
                    <ActivityIndicator size="large" color={Colors.primary} />
                </View>
            )
        }

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
        orders: state.orders.orders,
        isLoading: state.orders.isLoading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadOrders: () => dispatch(ordersActions.fetchOrders()),
        onLoading: () => dispatch(ordersActions.isLoadingTrue())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrdersScreen);