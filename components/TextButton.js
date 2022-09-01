import React from 'react';
import {
    TouchableOpacity,
    Text
} from 'react-native';

import { COLORS, FONTS } from '../constants';

export const TextButton = ({label, labelStyle, label2 = '', label2Style, buttonContainerStyle, disabled, onPress }) => {
    return(
        <TouchableOpacity 
            style={{
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: COLORS.primary,
                ...buttonContainerStyle
            }}
            disabled={disabled}
            onPress={onPress}
        >
            <Text style={{color: COLORS.white, ...FONTS.h3, ...labelStyle}}>
                {label}
            </Text>

            {label2 != "" &&
                <Text
                    style={{
                        flex: 1,
                        textAlign: 'right',
                        color: COLORS.white,
                        ...FONTS.h3,
                        ...label2Style
                    }}
                >
                    {label2}
                </Text>
            }

        </TouchableOpacity>
    )
}