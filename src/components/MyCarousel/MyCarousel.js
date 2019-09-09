import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/FontAwesome5';

import styles from './style';
import Colors from '../../constants/Colors';
import BranchItem from '../BranchItem';

class MyCarousel extends Component {

    state = {
        activeSlide: 0
    }

    get pagination () {
        const { activeSlide } = this.state;
        return (
            <Pagination
                dotsLength={this.props.data.length}
                activeDotIndex={activeSlide}
                dotStyle={styles.dots}
                inactiveDotStyle={styles.inactiveDots}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
            />
        );
    }

    render () {
        return (
            <View style={styles.container}>
                <View>
                    <TouchableHighlight
                        onPress={() => {this.carousel.snapToItem(this.state.activeSlide-1)}}>
                        <Icon 
                            name="chevron-right" 
                            size={30} 
                            color={Colors.primary}
                            onPress={() => {this.carousel.snapToItem(this.state.activeSlide-1)}}
                        />
                    </TouchableHighlight>
                </View>
            
                <View style={styles.carousel}>
                    <Carousel
                        ref={(c) => { this.carousel = c; }}
                        data={this.props.data}
                        sliderWidth={300}
                        itemWidth={300}
                        onSnapToItem = { index => this.setState({activeSlide:index}) }
                        renderItem={(branch) => {
                            return (
                                <BranchItem 
                                    title={branch.item.title}
                                    address={branch.item.address}
                                />         
                            )
                        }}
                    /> 
                    { this.pagination }
                </View>

                <View>
                    <TouchableHighlight
                        onPress={() => {this.carousel.snapToItem(this.state.activeSlide+1)}}>
                        <Icon 
                            name="chevron-left" 
                            size={30} 
                            color={Colors.primary}
                            onPress={() => {this.carousel.snapToItem(this.state.activeSlide+1)}}
                        />
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

export default MyCarousel;