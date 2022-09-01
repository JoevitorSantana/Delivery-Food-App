import React from 'react';
import {
    View,
    Text,
    ScrollView,
    Image,
} from 'react-native';
import { CartQuantity, Header, IconButton, IconLabel, LineDivider, Rating, StepperInput, TextButton } from '../../components';
import { COLORS, SIZES, icons, dummyData, FONTS, images } from '../../constants';

const FoodDetail = ({navigation}) => {

    const [foodItem, setFoodItem] = React.useState(dummyData.vegBiryani)
    const [selectedSize, setSelectedSize] = React.useState("")
    const [qty, setQty] = React.useState(1)    

    function renderHeader(){
        return(
            <Header 
                title="Detalhes"
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
                        onPress={() => console.log("Back")}
                    />
                }
                rightComponent={
                    <CartQuantity 
                        quantity={3}
                    />
                }
            />
        )
    }

    function renderDetails(){
        return(
            <View
                style={{
                    marginTop: SIZES.radius,
                    marginBottom: SIZES.padding,
                    paddingHorizontal: SIZES.padding
                }}
            >
                <View
                    style={{
                        height: 190,
                        borderRadius: 15,
                        backgroundColor: COLORS.lightGray2
                    }}
                >
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginTop: SIZES.base,
                            paddingHorizontal: SIZES.radius
                        }}
                    >
                        {/* Calorias*/}
                        <View
                            style={{
                                flexDirection: 'row'
                            }}
                        >
                            <Image 
                                source={icons.calories}
                                style={{
                                    width: 30,
                                    height: 30,
                                }}
                            />
                            {/*<Text
                                style={{
                                    color: COLORS.darkGray2,
                                    ...FONTS.body4
                                }}
                            >
                                {foodItem?.calories} Calorias
                            </Text>*/}
                        </View>

                        <Image 
                            source={icons.love}
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: foodItem?.isFavourite ? COLORS.primary : COLORS.gray
                            }}
                        />

                    </View>   

                     <Image 
                        source={foodItem?.image}
                        resizeMode="contain"
                        style={{
                            height: 170,
                            width: '100%'
                        }}
                     />                
                </View>
                {/* Favoritos */}
                <View
                    style={{
                        marginTop: SIZES.padding
                    }}
                >
                    <Text
                        style={{...FONTS.h1}}
                    >
                        {foodItem?.name}
                    </Text>

                    <Text
                        style={{
                            marginTop: SIZES.base,
                            color: COLORS.darkGray,
                            textAlign: 'justify',
                            ...FONTS.body3
                        }}
                    >
                        {foodItem?.description}
                    </Text>
                    {/* Avaliações duração e Entrega */}
                    <View
                        style={{
                            flexDirection: 'row',
                            marginTop: SIZES.padding
                        }}
                    >
                        {/* Avaliações */}
                        <IconLabel 
                            containerStyle={{
                                backgroundColor: COLORS.primary  
                            }}
                            icon={icons.star}
                            label="4.5"
                            labelStyle={{
                                color: COLORS.white
                            }}
                        />
                        {/* Duração */}
                        <IconLabel 
                            containerStyle={{
                                marginLeft: SIZES.radius,
                                paddingHorizontal: 0
                            }}
                            icon={icons.clock}
                            label="30 min"
                            labelStyle={{
                                color: COLORS.black
                            }}
                        />

                        {/* Entrega */}
                        <IconLabel 
                            containerStyle={{
                                marginLeft: SIZES.radius,
                                paddingHorizontal: 0
                            }}
                            icon={icons.dollar}
                            label="Entrega Grátis"
                            labelStyle={{
                                color: COLORS.black
                            }}
                        />
                    </View>
                    {/* Tamanhos */}
                    <View
                        style={{
                            flexDirection: 'row',
                            marginTop: SIZES.padding,
                            alignItems: 'center'
                        }}
                    >
                        <Text
                            style={{
                                ...FONTS.h3
                            }}
                        >
                            Tamanhos:
                        </Text>

                        <View
                            style={{
                                flexDirection: 'row',
                                flexWrap: 'wrap',
                                marginLeft: SIZES.padding
                            }}
                        >
                            {dummyData.sizes.map((item, index) => {
                                return(
                                    <TextButton 
                                        key={`Sizes=${index}`}
                                        buttonContainerStyle={{
                                            width: 45,
                                            height: 45,
                                            margin: SIZES.base,
                                            borderWidth: 1,
                                            borderRadius: SIZES.radius,
                                            borderColor: selectedSize == item.id ? COLORS.primary : COLORS.gray2,
                                            backgroundColor: selectedSize == item.id ? COLORS.primary : null
                                        }}
                                        label={item.label}
                                        labelStyle={{
                                            color: selectedSize == item.id ? COLORS.white : COLORS.gray2,
                                            ...FONTS.body2
                                        }}
                                        onPress={() => setSelectedSize(item.id)}
                                    />
                                )
                            })}

                        </View>

                    </View>
                </View>
            </View>
        )
    }

    function renderRestaurants(){
        return(
            <View
                style={{
                    flexDirection: 'row',
                    marginVertical: SIZES.padding,
                    paddingHorizontal: SIZES.padding,
                    alignItems: 'center'
                }}
            >
                <Image 
                    source={images.profile}
                    style={{
                        width: 50,
                        height: 50,
                        borderRadius: SIZES.radius
                    }}
                />

                {/* Info */}

                <View
                    style={{
                        flex: 1,
                        marginLeft: SIZES.radius,
                        justifyContent: 'center'
                    }}
                >
                    <Text style={{...FONTS.h3}}>Toninho Lanches</Text>
                    <Text style={{ color: COLORS.gray, ...FONTS.body4}}>1,2 Km de distância</Text>
                </View>

                {/* Avaliações */}
                <Rating 
                    rating={4}
                    iconStyle={{
                        marginLeft: 3
                    }}
                />

            </View>
        )
    }

    function renderFooter(){
        return(
            <View
                style={{
                    flexDirection: 'row',
                    height: 120,
                    alignItems: 'center',
                    paddingHorizontal: SIZES.padding,
                    paddingBottom: SIZES.radius
                }}
            >
                {/* Stepper input */}

                <StepperInput                  
                    value={qty}   
                    onAdd={() => setQty(qty + 1)}
                    onMinus={() => {
                        if(qty > 1){
                            setQty(qty - 1)
                        }
                    }}
                />

                {/* Text Button */}

                <TextButton 
                    buttonContainerStyle={{
                        flex: 1,
                        flexDirection: 'row',
                        height: 60,
                        marginLeft: SIZES.radius,
                        paddingHorizontal: SIZES.radius,
                        borderRadius: SIZES.radius,
                        backgroundColor: COLORS.primary  
                    }}
                    label="Comprar"
                    label2='R$15,99'
                    onPress={() => navigation.navigate('MyCart')}
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

            {/* Body */}
            <ScrollView>
                {/* Detalhe */}
                {renderDetails()}
                <LineDivider />
                {/* Restaurante */}
                {renderRestaurants()}
                {/* Footer */}
                <LineDivider />
                
            </ScrollView>
            {renderFooter()}
        </View>
    )
}

export default FoodDetail;