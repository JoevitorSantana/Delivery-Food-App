import React from "react"
import { FlatList, Image, Text, View } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler";
import { CartQuantity, Header, HorizontalFoodCard, HorizontalOrderCard, IconButton, TextButton, VerticalFoodCard, VerticalOrdersCards } from "../../components";
import { COLORS, SIZES, icons, images, dummyData, FONTS } from "../../constants";

const MyCoupons = ({navigation}) => {

    const [orderType, setOrderType] = React.useState(1)
    const [orderList, setOrderList] = React.useState([])
            
    React.useEffect(() => {
        handleChangeType(orderType)
    }, [])

    function handleChangeType(orderTypeId){
        let selectedOrder = dummyData.orders.find(a => a.id == orderTypeId)

        setOrderList(selectedOrder?.list)
    }

    function renderHeader(){
        return(
            <Header 
                title="Meus Cupons"
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
                    <TouchableOpacity
                        style={{
                            borderRadius: SIZES.radius,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <Image 
                            source={dummyData.myProfile?.profile_image}
                            style={{
                                width: 40,
                                height: 40,
                                borderRadius: SIZES.radius
                            }}
                        />
                    </TouchableOpacity>
                }                
            />
        )
    }    

    function renderMenuType(){
        return(
            <FlatList 
                horizontal
                data={dummyData.orders}
                keyExtractor={item => `${item.id}`}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    marginTop: 30,
                    marginBottom: 20
                }}
                renderItem={({item, index}) => (
                    <TouchableOpacity 
                        style={{
                            flexDirection: 'row',
                            height: 55,
                            width: 175,
                            marginTop: SIZES.padding,
                            marginLeft: index == 0 ? SIZES.padding : SIZES.radius,
                            marginRight: index == dummyData.orders.length - 1 ? SIZES.padding : 0,
                            paddingHorizontal: 8,
                            borderRadius: SIZES.radius,                            
                            backgroundColor: orderType == item.id ? COLORS.primary : COLORS.lightOrange2
                        }}
                        onPress={() => {
                            setOrderType(item.id)
                            handleChangeType(item.id)
                        }}                        
                    >                        
                        <Text
                            style={{
                                alignSelf: 'center',                                
                                marginRight: SIZES.base,
                                color: orderType == item.id ? COLORS.white : COLORS.primary,
                                ...FONTS.h3,                            
                            }}
                        >
                            {item.name}
                        </Text>                        
                    </TouchableOpacity>
                )}
            />
        )
    }


    return(
        <View
            style={{
                flex: 1, 
                backgroundColor: COLORS.white              
            }}
        >
            {renderHeader()}                     

            {/* Render Restaurants */}   
            <FlatList 
                data={orderList}
                keyExtractor={item => `${item.id}`}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={
                    <View>
                        {renderMenuType()}    
                    </View>
                }
                renderItem={({item, index}) => {
                    return(
                        <HorizontalOrderCard 
                            containerStyle={{
                                height: 130,
                                alignItems: 'center',
                                marginHorizontal: SIZES.padding,
                                marginBottom: SIZES.radius
                            }}
                            imageStyle={{
                                margin: 20,
                                height: 60,
                                width: 60,                                                                

                            }}
                            item={item}                            
                        />
                    )
                }}
            />

        </View>
    )
}

export default MyCoupons;