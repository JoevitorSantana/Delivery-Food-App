
import React from "react"
import { Image, View } from "react-native"
import { COLORS, icons } from "../constants"
import { FormInput } from "./FormInput"

export const FormInputCheck = ({value, error}) => {
    return(
        <View
            style={{
                justifyContent: 'center'
            }}
        >
            <Image 
                source={(value == "" || (value != "" && error == "") ? icons.correct : icons.correct)}
                style={{
                    height: 20,
                    width: 20,
                    tintColor: (value == "") ? COLORS.gray : (value != "" && error == "") ? COLORS.green : COLORS.red
                }}
            />
            

        </View>
    )
}