import React from "react"
import { Platform, Text, View } from "react-native"
import LinearGradient from "react-native-linear-gradient"
import { COLORS, FONTS, SIZES } from "../constants"
import { LineDivider } from "./LineDivider"
import { TextButton } from "./TextButton"

export const FooterTotal = ({subTotal, shippingFee, total, onPress})=>{
    return(
        <View>
            <LinearGradient 
                start={{ x: 0, y: 0}}
                end={{ x:0, y: 1 }}
                colors={[COLORS.transparent, COLORS.lightGray1]}
                style={{
                    position: 'absolute',
                    top: -15,
                    left: 0,
                    right: 0,
                    height: Platform.OS === 'android' ? 200 : 50,
                    borderTopLeftRadius: 15,
                    borderTopRightRadius: 15
                }}
            />

            <View
                style={{
                    padding: SIZES.padding,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    backgroundColor: COLORS.white
                }}
            >
                <View
                    style={{
                        flexDirection: 'row'
                    }}
                >
                    <Text style={{flex: 1, ...FONTS.body3, paddingBottom: 10}}>Subtotal</Text>
                    <Text style={{...FONTS.h3}}>R${subTotal.toFixed(2)}</Text>

                </View>

                <LineDivider />

                <View
                    style={{
                        flexDirection: 'row',
                        marginTop: SIZES.base,
                        marginBottom: SIZES.padding
                    }}
                >
                    <Text style={{flex: 1, ...FONTS.body3}}>Taxa de entrega</Text>
                    <Text style={{...FONTS.h3}}>R${shippingFee.toFixed(2)}</Text>
                </View>

                <View
                    style={{
                        flexDirection: 'row',
                        marginTop: 15,                        
                    }}
                >
                    <Text style={{flex: 1, ...FONTS.h2}}>Total:</Text>
                    <Text style={{...FONTS.h2}}>R${total.toFixed(2)}</Text>
                </View>

                <TextButton 
                    buttonContainerStyle={{
                        height: 60,
                        marginTop: SIZES.padding,
                        borderRadius: SIZES.radius,
                        backgroundColor: COLORS.primary
                    }}
                    label="Finalizar pedido"
                    onPress={onPress}
                />


            </View>
        </View>
    )
}