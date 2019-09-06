import React, { Component } from 'react';
import { View, Image, TouchableHighlight } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

import styles from './style';
import { IMAGES } from '../../data/temp-data';
import Colors from '../../constants/Colors';

class MyCarousel extends Component {

    state = {
        activeSlide: 0
    }

    get pagination () {
        const { activeSlide } = this.state;
        return (
            <Pagination
                dotsLength={IMAGES.length}
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
                {/* <View>
                    <TouchableHighlight
                        onPress={() => {this.carousel.snapToItem(this.state.activeIndex-1)}}>
                        <Icon 
                            name="chevron-right" 
                            size={40} 
                            color={Colors.primary}
                            onPress={() => {this.carousel.snapToItem(this.state.activeIndex-1)}}
                        />
                    </TouchableHighlight>
                </View> */}
            
                <View style={styles.carousel}>
                    <Carousel
                        ref={(c) => { this.carousel = c; }}
                        data={IMAGES}
                        sliderWidth={500}
                        itemWidth={360}
                        onSnapToItem = { index => this.setState({activeSlide:index}) }
                        renderItem={(image) => {
                            return (
                                <Image 
                                    source={{uri: image.item}}
                                    style={styles.image}
                                />               
                            )
                        }}
                    /> 
                    { this.pagination }
                </View>

                {/* <View>
                    <TouchableHighlight
                        onPress={() => {this.carousel.snapToItem(this.state.activeIndex+1)}}>
                        <Icon 
                            name="chevron-left" 
                            size={40} 
                            color={Colors.primary}
                            onPress={() => {this.carousel.snapToItem(this.state.activeIndex+1)}}
                        />
                    </TouchableHighlight>
                </View> */}

        </View>
        );
    }
}

export default MyCarousel;