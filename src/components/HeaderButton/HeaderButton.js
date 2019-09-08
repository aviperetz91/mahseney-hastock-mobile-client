import React from 'react';
import { HeaderButton } from 'react-navigation-header-buttons';
import Icon from 'react-native-vector-icons/FontAwesome5';

const CustomHeaderButton = props => {
    return (
        <HeaderButton 
            {...props} 
            IconComponent={Icon} 
            iconSize={21}
            color="white"
        />
    )
}

export default CustomHeaderButton;