import React from "react";
import {
    TouchableOpacity,
    View,
    Text,
    Image,
} from 'react-native';

import { COLORS, FONTS, SIZES, icons } from "../constants";
import { TextButton } from "./TextButton";

export const HorizontalOrderCard = ({containerStyle, imageStyle, item, onPress}) => {
    return(        
        <TouchableOpacity
            style={{
                flexDirection: 'row',
                borderRadius: SIZES.radius,
                backgroundColor: COLORS.lightGray2,
                ...containerStyle
            }}
        >
            
            {/* Image*/}
            <Image 
                source={item.restaurant_image}
                style={imageStyle}
            />

            {/* Info*/}
            <View 
                style={{
                    flex: 1,
                }}
            >
                <Text style={{...FONTS.h3, fontSize: 17}}>
                    {item.restaurant_name}
                </Text>
                <Text style={{color: COLORS.darkGray2, ...FONTS.body4}}>
                    {item.date} - {item.qty} items
                </Text>
                <Text style={{color: COLORS.green, ...FONTS.body4}}>
                    {item.status}
                </Text>                
            </View>

            {/* Calories*/}

            <View
                style={{
                    flexDirection: 'row',
                    position: 'absolute',
                    top: 5,
                    right: SIZES.radius
                }}
            >
                <Text style={{ marginTop: SIZES.base, ...FONTS.h2, color: COLORS.primary}}>
                    R${item.value}
                </Text>           

            </View>            
        </TouchableOpacity>
    )
}
