import React, { Component } from 'react';
import { SliderBox } from 'react-native-image-slider-box';

import { IMAGES } from '../../data/temp-data';
import Colors from '../../constants/Colors';

class Slider extends Component {
    render() {
        return (
            <SliderBox 
                images={IMAGES}
                sliderBoxHeight={150}
                dotColor= {Colors.primary}
                inactiveDotColor= "white"
                dotStyle={{
                    borderRadius: 15,
                }}
            />
        )
    }
}

export default Slider;