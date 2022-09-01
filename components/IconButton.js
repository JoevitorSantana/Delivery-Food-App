import React from 'react';
import { 
    View, 
    TouchableOpacity,
    Text,
    Image
} from 'react-native';

import { COLORS } from '../constants';

export const IconButton = ({containerStyle, icon, iconStyle, onPress}) => {
    return(
        <TouchableOpacity
            style={{
                ...containerStyle
            }}
            onPress={onPress}
        >
            <Image 
                source={icon}
                style={{
                    width: 30,
                    height: 30,
                    tintColor: COLORS.white,
                    ...iconStyle
                }}
            />
        </TouchableOpacity>
    )
}