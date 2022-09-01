import React from 'react';
import {
    View,
    Text,
    ScrollView
} from 'react-native';
import { COLORS, FONTS, SIZES } from '../../constants';
import {AuthLayout} from './AuthLayout'
import OTPInputView from '@twotalltotems/react-native-otp-input';
import { TextButton } from '../../components';

export const Otp = ({navigation}) => {

    const [timer, setTimer] = React.useState(60)

    React.useEffect(() => {
        let interval = setInterval(() => {
            setTimer(prevTimer => {
                if(prevTimer > 0){
                    return prevTimer - 1
                } else {
                    return prevTimer
                }
            })
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    return (
        <AuthLayout
            title='Autenticação'
            subtitle="Um código de verificação foi enviado para o email joevitoralvessantana@gmail.com"
            titleContainerStyle={{
                marginTop: SIZES.padding * 2
            }}
        >
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
            {/*OTP Inputs */}
            <View
                style={{
                    flex: 1,
                    marginTop: SIZES.padding * 2
                }}
            >
                <OTPInputView 
                    pinCount={4}
                    style={{
                        width: '100%',
                        height: 50,                        
                    }}
                    codeInputFieldStyle={{
                        height: 65,
                        width: 65,
                        borderRadius: SIZES.radius,
                        backgroundColor: COLORS.lightGray2,
                        color: COLORS.black,
                        ...FONTS.h3
                    }}
                    onCodeFilled={(code) => {
                        console.log(code)
                    }}
                />
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        marginTop: SIZES.padding
                    }}
                >
                    <Text
                        style={{
                            color: COLORS.darkGray, ...FONTS.body3
                        }}
                    >Não recebeu o código?</Text>
                    <TextButton 
                        label={`Reenviar (${timer}s)`}
                        disabled={timer == 0 ? false : true}
                        buttonContainerStyle={{
                            marginLeft: SIZES.base,
                            backgroundColor: null
                        }}
                        labelStyle={{
                            color: COLORS.primary,
                            ...FONTS.h3
                        }}
                        onPress={()=> setTimer(60)}
                    />
                </View>

                <View>
                    <TextButton 
                        label="Continuar"
                        buttonContainerStyle={{
                            height: 50,
                            alignItems: 'center',
                            marginTop: 240,
                            borderRadius: SIZES.radius,
                            backgroundColor: COLORS.primary
                        }}
                        onPress={() => console.log("Continue")}
                    />

                    <View
                        style={{
                            marginTop: SIZES.padding,
                            alignItems: 'center',
                            
                        }}
                    >
                        <Text
                            style={{
                                color: COLORS.darkGray,
                                ...FONTS.body3,
                                textAlign: 'center'
                            }}
                        >
                            Ao entrar você concorda com nossos termos.
                        </Text>
                        <TextButton 
                            label="Termos e Condições"
                            buttonContainerStyle={{
                                backgroundColor: null
                            }}
                            labelStyle={{
                                color: COLORS.primary,
                                ...FONTS.body3
                            }}
                            onPress={() => console.log("TnC")}
                        />
                </View>
                
            </View>

            </View>
            </ScrollView>
            

        </AuthLayout>
    )
}
