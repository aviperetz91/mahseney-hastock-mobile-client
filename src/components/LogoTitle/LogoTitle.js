import React from 'react';
import { Image } from 'react-native';

const LogoTitle = () => {
    return (
        <Image 
            source={require("../../assets/images/logo.jpg")} 
            style={{width: 280, height: 35}}
        />
    )
}

export default LogoTitle;