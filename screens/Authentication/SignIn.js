import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import { CustomSwitch, FormInput, TextButton, TextIconButton } from '../../components';
import { COLORS, FONTS, icons, images, SIZES } from '../../constants';
import { AuthLayout } from './AuthLayout';
import utils from '../../utils/Utils'

export const SignIn = ({navigation}) => {

    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [emailError, setEmailError] = React.useState('')
    const [showPass, setShowPass] = React.useState(false)
    const [saveMe, setSaveMe] = React.useState(false)

    function isEnabledSignIn(){
        return email != "" && password != "" && emailError == ""
    }

    return (        
        <ScrollView
            showsVerticalScrollIndicator={false}
        >
        <AuthLayout
            title="Bem vindo de volta!"
            subtitle="Faça login para acessar o app"
        >
            <View
                style={{
                    flex: 1,
                    marginTop: SIZES.padding * 2
                }}
            >
                {/* Form input */}

                <FormInput 
                    label="Email"
                    keyBoardType='email-address'
                    autoCompleteType='email'
                    
                    onChange={(value) => {
                        utils.validateEmail(value, setEmailError)
                        setEmail(value)
                    }}
                    errorMsg={emailError}
                    
                    appendComponent={
                        <View
                            style={{
                                justifyContent: 'center'
                            }}
                        >
                            <Image 
                                source={email == "" || (email != "" && emailError == "") ? icons.correct : icons.correct}
                                style={{
                                    height: 20,
                                    width: 20,
                                    tintColor: email == "" ? COLORS.gray : (email != "" && emailError == "") ? COLORS.green : COLORS.red
                                }}
                            />

                        </View>
                    }
                />

                <FormInput 
                    label="Senha"
                    secureTextEntry={!showPass}
                    autoCompleteType="password"
                    containerStyle={{
                        marginTop: SIZES.radius
                    }}
                    onChange={(value) => setPassword(value)}
                    appendComponent={
                        <TouchableOpacity
                            style={{
                                width: 40,
                                alignItems: 'flex-end',
                                justifyContent: 'center'
                            }}
                            onPress={() => setShowPass(!showPass)}
                        >
                            <Image 
                                source={showPass ? icons.eye_close : icons.eye}
                                style={{
                                    height: 20,
                                    width: 20,
                                    tintColor: COLORS.gray
                                }}
                            />

                        </TouchableOpacity>
                    }
                />

                {/* Relembrar e esqueci a senha */}

                <View
                    style={{
                        flexDirection: 'row',
                        marginTop: SIZES.radius,
                        justifyContent: 'space-between'
                    }}
                >
                    <CustomSwitch 
                        value = {saveMe}
                        onChange={(value) => setSaveMe(value)}
                    />
                    <TextButton 
                        label="Esqueceu a senha?"
                        buttonContainerStyle={{
                            backgroundColor: null,
                        }}
                        labelStyle={{
                            color: COLORS.gray,
                            ...FONTS.body4
                        }}
                        onPress={() => navigation.navigate('ForgotPassword')}
                    />

                </View>
                {/* SignIn*/}
                <TextButton 
                    label="Entrar"
                    disabled = {isEnabledSignIn() ? false : true}
                    buttonContainerStyle={{
                        height: 55,
                        alignItems: 'center',
                        marginTop: SIZES.padding,
                        borderRadius: SIZES.radius,
                        backgroundColor: isEnabledSignIn() ? COLORS.primary : COLORS.transparentPrimray
                    }}
                />
                {/* Cadastrar */}
                <View
                    style={{
                        flexDirection: 'row',
                        marginTop: SIZES.radius,
                        justifyContent: 'center'
                    }}
                >
                    <Text
                        style={{
                            color: COLORS.darkGray,
                            ...FONTS.body3
                        }}
                    >
                        Ainda não possui uma conta?
                    </Text>

                    <TextButton 
                        label="Cadastrar"
                        buttonContainerStyle={{
                            marginLeft: 3,
                            backgroundColor: null
                        }}
                        labelStyle={{
                            color: COLORS.primary,
                            ...FONTS.h3
                        }}
                        onPress={() => navigation.navigate("SignUp")}
                    />


                </View>
            </View>

            {/* Footer */}
            <View
                style={{
                    backgroundColor: COLORS.white,
                    paddingTop: 15
                }}
            >
                {/* Facebook */}
                <TextIconButton 
                    containerStyle={{
                        height: 50,
                        alignItems: 'center',
                        marginTop: 95,
                        borderRadius: SIZES.radius,
                        backgroundColor: COLORS.blue
                    }}
                    icon={icons.fb}
                    iconPosition="LEFT"
                    iconStyle={{
                        tintColor: COLORS.white
                    }}
                    label="Continuar com Facebook"
                    labelStyle={{
                        marginLeft: SIZES.radius,
                        color: COLORS.white
                    }}
                    onPress={() => console.log("FB")}
                />
                {/* Google */}
                <TextIconButton 
                    containerStyle={{
                        height: 50,
                        alignItems: 'center',
                        marginTop: SIZES.radius,
                        borderRadius: SIZES.radius,
                        backgroundColor: COLORS.red,                          
                    }}
                    icon={icons.google}
                    iconPosition="LEFT"
                    iconStyle={{
                        tintColor: COLORS.white
                    }}
                    label="Continuar com Google"
                    labelStyle={{
                        marginLeft: SIZES.radius,
                        color: COLORS.white
                    }}
                    onPress={() => console.log("Google")}
                />
            </View>

        </AuthLayout>
        </ScrollView>
    )
}
