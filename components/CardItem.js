import React from "react"
import { Image, Text, TouchableOpacity, View } from "react-native"
import { isEnabled } from "react-native/Libraries/Performance/Systrace"
import { COLORS, FONTS, icons, SIZES } from "../constants"

export const CardItem = ({item, isSelected, onPress}) => {
    return(
        <TouchableOpacity
            style={{
                flexDirection: 'row',
                height: 100,
                alignItems: 'center',
                marginTop: SIZES.padding,
                borderWidth: 2,
                borderRadius: SIZES.radius,
                borderColor: isSelected ? COLORS.primary : COLORS.lightGray2
            }}
            onPress={onPress}
        >
            <View
                style={{
                    width: 60,
                    height: 45,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderWidth: 2,
                    borderRadius: SIZES.radius,
                    borderColor: COLORS.transparent
                }}
            >
                <Image 
                    source={item.icon}
                    resizeMode="center"
                    style={{
                        width: 35,
                        height: 45,
                        margin: 15
                    }}
                />

            </View>

            <Text
                style={{
                    flex: 1,
                    marginLeft: SIZES.radius,
                    ...FONTS.h3
                }}
            >
                {item.name}
            </Text>

            <Image 
                source={isSelected ? icons.check_on : icons.check_off}
                style={{
                    width: 25,
                    height: 25,
                    margin: 15
                }}
            />
        </TouchableOpacity>
    )
}