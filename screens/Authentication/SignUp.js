import React, { useCallback } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import { FormInput, FormInputSignUp, TextButton, TextIconButton } from '../../components';
import { SIZES, icons, COLORS, constants, FONTS } from '../../constants';
import utils from '../../utils/Utils';
import { AuthLayout } from './AuthLayout';
import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import api from '../../services/api';



export const SignUp = ({navigation}) => {

    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [username, setUsername] = React.useState('')
    const [emailError, setEmailError] = React.useState('')
    const [usernameError, setUsernameError] = React.useState('')
    const [passwordError, setPasswordError] = React.useState('')
    const [showPass, setShowPass] = React.useState(false)
    const [saveMe, setSaveMe] = React.useState(false)    

    const {control, handleSubmit} = useForm({resolver: yupResolver(schema)})

    const handleRegister = useCallback(async(data) => {
        try{

            const schema = yup.object().shape({
                name: yup.string().required("Informe seu nome"),
                lastName: yup.string().required("Informe seu sobrenome"),
                phone: yup.string().required("Informe seu telefone"),
                email: yup.string().email("Email inválido").required("Informe um email"),
                password: yup.string().min(6, "A senha deve ter ao menos 6 dígitos").required("Informe uma senha")
            })

            await schema.validate(data, {
                abortEarly: false
            })

            await api.post('/users/create', data)

            navigation.goBack()

            console.log(res.data)

            console.log(data)

        }catch(err){
            console.log("erro")
        }
    }, [])

    /*function isEnabledSignUp(){
        return email != "" && password != "" && emailError == "" && username != "" && usernameError == "" && passwordError == ""
    }*/

    return (
        <ScrollView>
        <AuthLayout
            title="Vamos lá"
            subtitle="Crie sua conta para continuar!"
            titleContainerStyle={{
                marginTop: SIZES.padding
            }}
        >
            <View
                style={{
                    flex: 1,
                    marginTop: SIZES.padding
                }}
            >
                <FormInputSignUp 
                    label="Email"
                    keyBoardType='email-address'
                    autoCompleteType='email'
                    name="email"
                    control={control}
                    onChangeValue={(value) => {
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

                <FormInputSignUp 
                    label="Nome"
                    name="name"
                    control={control}
                    containerStyle={{
                        marginTop: SIZES.radius
                    }}
                    onChangeValue={(value) => {
                        setUsername(value)
                    }}
                    errorMsg={usernameError}
                    appendComponent={
                        <View
                            style={{
                                justifyContent: 'center'
                            }}
                        >
                            <Image 
                                source={username == "" || (username != "" & usernameError == "") ? icons.correct : icons.correct}
                                style={{
                                    height: 20,
                                    width: 20,
                                    tintColor: username == "" ? COLORS.gray : (username != "" && usernameError == "") ? COLORS.green : COLORS.red
                                }}
                            />
                        </View>
                    }
                />

                <FormInputSignUp 
                    label="Sobrenome"
                    name="lastName"
                    control={control}
                    containerStyle={{
                        marginTop: SIZES.radius
                    }}
                    onChangeValue={(value) => {
                        setUsername(value)
                    }}
                    errorMsg={usernameError}
                    appendComponent={
                        <View
                            style={{
                                justifyContent: 'center'
                            }}
                        >
                            <Image 
                                source={username == "" || (username != "" & usernameError == "") ? icons.correct : icons.correct}
                                style={{
                                    height: 20,
                                    width: 20,
                                    tintColor: username == "" ? COLORS.gray : (username != "" && usernameError == "") ? COLORS.green : COLORS.red
                                }}
                            />
                        </View>
                    }
                />

                <FormInputSignUp 
                    label="Telefone"
                    name="phone"
                    control={control}
                    containerStyle={{
                        marginTop: SIZES.radius
                    }}
                    onChangeValue={(value) => {
                        setUsername(value)
                    }}
                    errorMsg={usernameError}
                    appendComponent={
                        <View
                            style={{
                                justifyContent: 'center'
                            }}
                        >
                            <Image 
                                source={username == "" || (username != "" & usernameError == "") ? icons.correct : icons.correct}
                                style={{
                                    height: 20,
                                    width: 20,
                                    tintColor: username == "" ? COLORS.gray : (username != "" && usernameError == "") ? COLORS.green : COLORS.red
                                }}
                            />
                        </View>
                    }
                />

                <FormInputSignUp 
                    name="password"                    
                    control={control}
                    label="Senha"
                    secureTextEntry={!showPass}
                    autoCompleteType="password"
                    containerStyle={{
                        marginTop: SIZES.radius
                    }}
                    onChangeValue={(value) => {
                        utils.validatePassword(value, setPasswordError)
                        setPassword(value)
                    }}
                    errorMsg={passwordError}
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
                
                           

                <TextButton 
                    label="Cadastrar"
                    //disabled={isEnabledSignUp() ? false : true}
                    buttonContainerStyle={{
                        height: 55,
                        alignItems: 'center',
                        marginTop: SIZES.padding,
                        borderRadius: SIZES.radius,
                        backgroundColor:COLORS.primary //isEnabledSignUp() ? COLORS.primary : COLORS.transparentPrimray
                    }}
                    onPress={handleSubmit(handleRegister)}
                />
                <View
                    style={{
                        flexDirection: 'row',
                        marginTop: SIZES.radius,
                        justifyContent: 'center'
                    }}
                >
                    <Text
                        style={{color: COLORS.darkGray, ...FONTS.body3}}
                    >
                        Já possui uma conta?
                    </Text>
                    <TextButton 
                        label="Login"
                        buttonContainerStyle={{
                            backgroundColor: null,
                            marginLeft: 5
                        }}
                        labelStyle={{
                            color: COLORS.primary,
                            ...FONTS.h3
                        }}
                        onPress={() => navigation.navigate("Otp")}
                    />

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
                            marginTop: 50,
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
                        onPress={handleSubmit(handleRegister)}
                        
                    />
                </View>

            </View>

        </AuthLayout>
        </ScrollView>
    )
}
