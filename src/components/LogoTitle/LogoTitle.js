import React from 'react';
import { Image } from 'react-native';

const LogoTitle = () => {
    return (
        <Image 
            source={require("../../assets/images/LogoTitle.jpg")} 
            style={{width: 260, height: 35}}
        />
    )
}

export default LogoTitle;