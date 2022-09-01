import React from "react";
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';

import { COLORS, FONTS, SIZES, icons } from "../constants";

export const VerticalFoodCard = ({ containerStyle, item, onPress }) => {
    return(
        <TouchableOpacity 
            style={{
                width: 200,
                padding: SIZES.radius,
                alignItems: 'center',
                borderRadius: SIZES.radius,
                backgroundColor: COLORS.lightGray2,
                ...containerStyle
            }}
        >
            {/* Calorias */}
            {/*<View style={{flex: 1, flexDirection: 'row'}}>
                <Image 
                    source={icons.calories}
                    style={{
                        width: 30,
                        height: 30
                    }}
                />                            
                </View>*/}
            {/* Favoritos */}
            <Image 
                source={icons.love}
                style={{
                    width: 20,
                    height: 20,
                    tintColor: item.isFavourite ? COLORS.primary : COLORS.gray
                }}
            />

            {/* Image */}            
            <View 
                style={{
                    height: 150,
                    width: 150,
                    alignItems: "center"
                }}
            >
                <Image 
                    source={item.image}
                    style={{
                        height: '100%',
                        width: '100%',
                    }}
                />
            </View>

            {/* Info */}
            <View
                style={{
                    alignItems: 'center',
                    marginTop: -20
                }}
            >
                <Text style={{...FONTS.h3}}>{item.name}</Text>
                <Text style={{color: COLORS.darkGray2, textAlign: 'center', ...FONTS.body5}}>
                    {item.description}
                </Text>
                <Text style={{marginTop: SIZES.radius, ...FONTS.h2}}>
                    R${item.price}
                </Text>
            </View>
        </TouchableOpacity>
    )
}
