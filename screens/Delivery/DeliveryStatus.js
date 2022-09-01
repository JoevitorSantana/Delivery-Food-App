import React from 'react';
import {
    View,
    Text,    
    Image, ScrollView
} from 'react-native';
import { Header, LineDivider, TextButton, TextIconButton } from '../../components';
import { COLORS, constants, FONTS, icons, SIZES } from '../../constants';

const DeliveryStatus = ({ navigation }) => {

    const [currentStep, setCurrentStep] = React.useState(3)

    function renderHeader(){
        return(
            <Header 
                title="Status da pedido"
                containerStyle={{
                    height: 50,
                    marginHorizontal: SIZES.padding,
                    marginTop: 20
                }}

            />
        )
    }

    function renderInfo(){
        return(
            <View
                style={{
                    marginTop: SIZES.radius,
                    paddingHorizontal: SIZES.padding
                }}
            >
                <Text 
                    style={{
                        textAlign: 'center', color: COLORS.gray, ...FONTS.body4
                    }}
                >
                    Andamento da entrega
                </Text>
                <Text
                    style={{
                        textAlign: 'center',
                        ...FONTS.h2
                    }}
                >
                    02 Julho de 2022 / 12:30
                </Text>                
            </View>
        )
    }

    function renderTrackOrder(){
        return(
            <View
                style={{
                    marginTop: SIZES.padding,
                    paddingVertical: SIZES.padding,
                    borderRadius: SIZES.radius,
                    borderWidth: 2,
                    borderColor: COLORS.lightGray2,
                    backgroundColor: COLORS.white2
                }}
            >
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginBottom: 20,
                        paddingHorizontal: SIZES.padding,
                    }}
                >
                    <Text style={{...FONTS.h3}}>Rastrear pedido</Text>
                    <Text style={{color: COLORS.gray, ...FONTS.body3}}>NY012345</Text>
                </View>

                <LineDivider 
                    lineStyle={{
                        backgroundColor: COLORS.lightGray2
                    }}
                />

                <View
                    style={{
                        marginTop: SIZES.padding,
                        paddingHorizontal: SIZES.padding
                    }}
                >
                    {constants.track_order_status.map((item, index) => {
                        return(
                            <View
                                key={`StatusList-${index}`}
                            >
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        marginVertical: -5
                                    }}
                                >
                                    <Image 
                                        source={icons.check_circle}
                                        style={{
                                            width: 40,
                                            height: 40,
                                            tintColor: index <= currentStep ? COLORS.primary : COLORS.lightGray1
                                        }}
                                    />

                                    <View
                                        style={{
                                            marginLeft: SIZES.radius
                                        }}
                                    >
                                        <Text style={{...FONTS.h3}}>{item.title}</Text>
                                        <Text style={{ color: COLORS.gray, ...FONTS.body4 }}>{item.sub_title}</Text>

                                    </View>
                                </View>

                                {index < constants.track_order_status.length - 1 &&
                                    <View>
                                        {index < currentStep &&
                                            <View
                                                style={{
                                                    height: 50,
                                                    width: 3,
                                                    marginLeft: 18,
                                                    backgroundColor: COLORS.primary,
                                                    zIndex: -1
                                                }}
                                            >
                                                
                                            </View>                                        
                                        }

                                        {index >= currentStep &&
                                            <Image 
                                                source={icons.dotted_line}
                                                resizeMode='cover'
                                                style={{
                                                    width: 4,
                                                    height: 50,
                                                    marginLeft: 17
                                                }}
                                            />
                                        }                                        
                                    </View>

                                }
                                
                            </View>
                        )
                    })}

                </View>

            </View>
        )
    }

    function renderFooter(){
        return(
            <View
                style={{
                    marginTop: SIZES.radius,
                    marginBottom: SIZES.padding
                }}
            >
                {currentStep < constants.track_order_status.length - 1 &&
                    <View
                        style={{
                            flexDirection: 'row',
                            height: 55
                        }}
                    >
                        <TextButton 
                            buttonContainerStyle={{
                                width: '40%',
                                borderRadius: SIZES.base,
                                backgroundColor: COLORS.lightGray2,
                            
                            }}
                            label="Cancelar"
                            labelStyle={{
                                color: COLORS.primary
                            }}
                            onPress={() => navigation.navigate("MyCard")}
                        />
                        <TextIconButton 
                            containerStyle={{
                                flex: 1,
                                marginLeft: SIZES.radius,
                                borderRadius: SIZES.base,
                                backgroundColor: COLORS.primary
                            }}
                            label="Ver no Mapa"
                            labelStyle={{
                                color: COLORS.white,
                                ...FONTS.h3
                            }}
                            icon={icons.map}
                            iconPosition="LEFT"
                            iconStyle={{
                                width: 25,
                                height: 25,
                                marginRight: SIZES.base,
                                tintColor: COLORS.white
                            }}
                            onPress={() => navigation.navigate("Map")}
                        />

                    </View>

                }

                {currentStep == constants.track_order_status.length - 1 &&
                    <TextButton 
                        buttonContainerStyle={{
                            height: 55,
                            borderRadius: SIZES.base
                        }}
                        label="Pronto"
                        onPress={() => navigation.navigate("Home")}
                    />
                }

            </View>
        )
    }

    return (
        <View
            style={{
                flex: 1,
                paddingHorizontal: SIZES.padding,
                backgroundColor: COLORS.white
            }}
        >
            {renderHeader()}
            {renderInfo()}
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
            {renderTrackOrder()}            
            </ScrollView>

            {renderFooter()}
        </View>
    )
}

export default DeliveryStatus;