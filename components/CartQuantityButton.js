import React from "react"
import { Image, View, Text, TouchableOpacity } from "react-native"
import { COLORS, SIZES, icons, FONTS } from "../constants"

export const CartQuantity = ({containerStyle, iconStyle, quantity, onPress}) => {
    return(
        <TouchableOpacity
            style={{
                width: 40,
                height: 40,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: SIZES.radius,
                //backgroundColor: COLORS.lightOrange2,
                ...containerStyle
            }}
            onPress={onPress}
        >
            <Image 
                source={icons.cart}
                style={{
                    width: 35,
                    height: 35,
                    tintColor: COLORS.black,
                    ...iconStyle
                }}
            />
            <View
                style={{
                    position: 'absolute',
                    top: 0,
                    right: 1,
                    height: 20,
                    width: 20,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: SIZES.radius,
                    backgroundColor: COLORS.primary
                }}
            >
                <Text
                    style={{
                        color: COLORS.white,
                        ...FONTS.body5,
                        lineHeight: 2,
                        fontSize: 10
                    }}
                >
                    {quantity}
                </Text>
            </View>
        </TouchableOpacity>
    )
}