import React from "react";
import { TextInput, View, Text } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";
import {Control, Controller} from 'react-hook-form'

export const FormInputSignUp = ({
    containerStyle,
    inputContainerStyle,
    label,
    placeholder,
    inputStyle,
    prependComponent,
    appendComponent,
    onChangeValue,
    secureTextEntry,
    keyBoardType="default",
    autoCompleteType = 'off',
    autoCapitalize = 'none',
    errorMsg,
    maxLength,
    control,
    name
}) => {

    return(
        <View
            style={{
                ...containerStyle
            }}
        >
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}
            >
                <Text
                    style={{color: COLORS.gray, ...FONTS.body4}}
                >
                    {label}
                </Text>                
                    <Text
                        style={{color: COLORS.red, ...FONTS.body4}}
                    >
                        {errorMsg.message}
                    </Text>                
            </View>
            <View
                style={{
                    flexDirection: 'row',
                    height: SIZES.height > 800 ? 55 : 45,
                    paddingHorizontal: SIZES.padding,
                    marginTop: SIZES.base > 800 ? SIZES.base : 0,
                    borderRadius: SIZES.radius,
                    backgroundColor: COLORS.lightGray2,
                    ...inputContainerStyle
                }}
            >
                {prependComponent}
                <Controller
                    name={name}
                    control={control}
                    render={({field: {onChange, value}}) => (
                        <TextInput
                            style={{
                                flex: 1,
                                ...inputStyle,
                                color: COLORS.gray,
                            }}
                            placeholder={placeholder}
                            placeholderTextColor="gray"
                            secureTextEntry={secureTextEntry}
                            keyboardType={keyBoardType}
                            autoCompleteType={autoCompleteType}
                            autoCapitalize={autoCapitalize}        
                            maxLength={maxLength}            
                            onChangeText={onChange}
                            value={value}                                                
                        />                        
                    )}                    
                />
                {appendComponent}
            </View>
        </View>
        
    )
}