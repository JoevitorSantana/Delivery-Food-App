import React from 'react';
import {
    View,
    Text,
    Image
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { FormInput, TextButton } from '../../components';
import { SIZES, icons, COLORS, constants } from '../../constants';
import utils from '../../utils/Utils';
import { AuthLayout } from './AuthLayout';

export const ForgotPassword = ({navigation}) => {

    const [email, setEmail] = React.useState('')
    const [emailError, setEmailError] = React.useState('')

    function isEnabledSignIn(){
        return email != "" && emailError == ""
    }

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}            
        >
        <AuthLayout
            title="Recuperação de Senha"
            subtitle="Por favor digite seu email para recuperarmos a senha"
            titleContainerStyle={{
                marginTop: SIZES.padding * 2
            }}
        >
            <View
                style={{
                    flex: 1,
                    marginTop: SIZES.padding * 2
                }}
            >
                <FormInput 
                    label="Email"
                    keyBoardType='email-address'
                    autoCompleteType='email'
                    containerStyle={{
                        marginBottom: 170
                    }}

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

            </View>
            <TextButton 
                label="Enviar email"
                disabled={isEnabledSignIn() ? false : true}
                buttonContainerStyle={{
                    height: 55,
                    alignitems: 'center',
                    marginTop: SIZES.padding,
                    borderRadius: SIZES.radius,                
                    backgroundColor: isEnabledSignIn() ? COLORS.primary : COLORS.transparentPrimray
                }}

                onPress={() => navigation.goBack()}
            />
            
        </AuthLayout>
        </ScrollView>
    )
}