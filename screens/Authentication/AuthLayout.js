import React from "react";
import { View, Text, Image } from "react-native";

import {COLORS, FONTS, images, SIZES} from '../../constants';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'

export const AuthLayout = ({title, subtitle, children, titleContainerStyle}) => {
    return(
        <View
            style={{
                flex: 1,
                paddingVertical: SIZES.padding,
                backgroundColor: COLORS.white
            }}
        >
            <KeyboardAwareScrollView
                keyboardDismissMode="on-drag"
                contentContainerStyle={{
                    flex: 1,
                    paddingHorizontal: SIZES.padding
                }}
            >
                {/* Icon */}
                <View
                    style={{
                        alignItems: 'center'
                    }}
                >
                    <Image 
                        source={images.logo_02}
                        resizeMode='contain'
                        style={{
                            height: 100,
                            width: 200
                        }}
                    />
                </View>
                {/* titulo e subtitulo*/}
                <View
                    style={{
                        marginTop: SIZES.padding,
                        ...titleContainerStyle
                    }}
                >
                    <Text
                        style={{
                            textAlign: 'center',
                            ...FONTS.h2
                        }}
                    >
                        {title}
                    </Text>
                    <Text
                        style={{
                            textAlign: 'center',
                            color: COLORS.darkGray,
                            marginTop: SIZES.base,
                            ...FONTS.body3
                        }}
                    >
                        {subtitle}
                    </Text>
                </View>

                {/* Content */}
                {children}
            </KeyboardAwareScrollView>
        </View>
    )
}