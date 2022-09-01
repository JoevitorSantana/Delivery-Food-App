import React from 'react';
import {
    View,
    Text,
    Image,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { CardItem, FooterTotal, FormInput, Header, IconButton } from '../../components';
import { COLORS, dummyData, FONTS, icons, SIZES } from '../../constants';

const Checkout = ({ navigation, route }) => {

    const [selectedCard, setSelectedCard] = React.useState(null)

    React.useEffect(() => {
        let {selectedCard} = route.params

        setSelectedCard(selectedCard)
    }, [])

    function renderHeader(){
        return(
            <Header 
                title="Finalizar compra"
                containerStyle={{
                    height: 50,
                    marginHorizontal: SIZES.padding,
                    marginTop: 20
                }}
                leftComponent={
                    <IconButton 
                        icon={icons.back}
                        containerStyle={{
                            width: 40,
                            height: 40,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderWidth: 1,
                            borderRadius: SIZES.radius,
                            borderColor: COLORS.gray2
                        }}
                        iconStyle={{
                            width: 20,
                            height: 20,
                            tintColor: COLORS.gray2
                        }}
                        onPress={() => navigation.goBack()}
                    />
                }
                rightComponent={
                    <View
                        style={{
                            width: 40
                        }}
                    >

                    </View>
                }                
            />               
        )
    }

    function renderMyCards(){
        return(
            <View>
                {selectedCard && dummyData.myCards.map((item, index) => {
                    return(
                        <CardItem 
                            key={`MyCard-${item.id}`}
                            item={item}
                            isSelected={`${selectedCard?.key}-${selectedCard?.id}` == `MyCard-${item.id}`}
                            onPress={() => setSelectedCard({...item, key: 'MyCard'})} 
                        />
                    )
                })}
            </View>
        )
    }

    function renderDeliveryAddress(){
        return(
            <View
                style={{
                    marginTop: SIZES.padding
                }}
            >
                <Text style={{...FONTS.h3}}>Endereço de entrega</Text>

                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginTop: SIZES.radius,
                        paddingVertical: SIZES.radius,
                        paddingHorizontal: SIZES.padding,
                        borderWidth: 2,
                        borderRadius: SIZES.radius,
                        borderColor: COLORS.lightGray2
                    }}
                >
                    <Image 
                        source={icons.location1}
                        style={{
                            width: 40,
                            height: 40
                        }}
                    />

                    <Text
                        style={{
                            marginLeft: SIZES.radius,
                            width: "85%",
                            ...FONTS.body3
                        }}
                    >
                        Rodovia Raposo Tavares, Km 561

                    </Text>
                </View>
            </View>
        )
    }

    function renderCoupon(){
        return(
            <View
                style={{
                    marginTop: SIZES.padding
                }}
            >
                <Text style={{...FONTS.h3}}>Adicionar cupom</Text>

                <FormInput 
                    inputContainerStyle={{
                        marginTop: 0,
                        paddingLeft: SIZES.padding,
                        paddingRight: 0,
                        borderWidth: 2,
                        borderColor: COLORS.lightGray2,
                        backgroundColor: COLORS.lightGray2,
                        backgroundColor: COLORS.white,
                        overflow: 'hidden'
                    }}
                    placeholder="Código de Cupom"
                    appendComponent={
                        <View
                            style={{
                                width: 60,
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: COLORS.primary
                            }}
                        >
                            <Image 
                                source={icons.discount}
                                style={{
                                    width: 40,
                                    height: 40
                                }}
                            />

                        </View>

                    }
                />

            </View>
        )
    }

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: COLORS.white
            }}
        >
            {renderHeader()}

            <KeyboardAwareScrollView
                keyboardDismissMode='on-drag'
                extraScrollHeight={-200}
                contentContainerStyle={{
                    flexGrow: 1,
                    paddingHorizontal: SIZES.padding,
                    paddingBottom: 20
                }}
            >
                {/* cartões */}

                {renderMyCards()}

                {renderDeliveryAddress()}

                {renderCoupon()}
            </KeyboardAwareScrollView>

            <FooterTotal 
                subTotal={37.97}
                shippingFee={0.00}
                total={37.97}
                onPress={() => navigation.replace('Success')}
            />
        </View>
    )
}

export default Checkout;