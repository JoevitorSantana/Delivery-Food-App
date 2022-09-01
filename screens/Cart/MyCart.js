import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';
import { CartQuantity, FooterTotal, Header, IconButton, StepperInput } from '../../components';
import { COLORS, SIZES, icons, dummyData, FONTS } from '../../constants';
import {SwipeListView} from 'react-native-swipe-list-view'

const MyCart = ({ navigation }) => {

    const [myCartList, setMyCartList] = React.useState(dummyData.myCart)

    function updateQuantityHandler(newQty, id){
        const newMyCartList = myCartList.map(cl => (
            cl.id === id ? {...cl, qty: newQty }: cl
        ))

        setMyCartList(newMyCartList)
    }

    function removeMyCartHandler(id){
        let newMyCartList = [...myCartList]

        const index = newMyCartList.findIndex(cart => cart.id === id)

        newMyCartList.splice(index, 1)
        setMyCartList(newMyCartList)
    }

    function renderHeader(){
        return(
            <Header 
                title="Carrinho"
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
                    <CartQuantity 
                        quantity={1}
                    />
                }                
            />
        )
    }

    function renderCartList(){
        return(
            <SwipeListView 
                data={myCartList}
                keyExtractor={item => `${item.id}`}
                contentContainerStyle={{
                    marginTop: SIZES.radius,
                    paddingHorizontal: SIZES.padding,
                    paddingBottom: SIZES.padding *2
                }}
                disableRightSwipe={true}
                rightOpenValue={-75}
                renderItem={(data, rowMap) => (
                    <View
                        style={{
                            height: 100,
                            backgroundColor: COLORS.lightGray2,
                            ...styles.cartItemContainer
                        }}
                    >
                        <View
                            style={{
                                width: 90,
                                height: 100,
                                marginLeft: -10
                            }}
                        >
                            <Image 
                                source={data.item.image}
                                resizeMode="contain"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    position: 'absolute',
                                    top: 10
                                }}
                            />

                        </View>

                        <View
                            style={{
                                flex: 1
                            }}
                        >
                            <Text
                                style={{...FONTS.body3}}
                            >
                                {data.item.name}
                            </Text>
                            <Text style={{color: COLORS.primary, ...FONTS.h3 }}>R${data.item.price}</Text>

                        </View>
                        
                        {/* Qty */}
                        <StepperInput 
                            containerStyle={{
                                height: 50,
                                width: 125,
                                backgroundColor: COLORS.white
                            }}
                            value={data.item.qty}
                            onAdd={() => updateQuantityHandler(data.item.qty + 1, data.item.id)}
                            onMinus={() => {
                                if(data.item.qty>1){
                                    updateQuantityHandler(data.item.qty - 1, data.item.id)
                                }
                            }}
                        />
                    </View>                    
                )}
                renderHiddenItem={(data, rowMap) => (
                    <IconButton 
                        containerStyle={{
                            flex: 1,
                            justifyContent: 'flex-end',
                            backgroundColor: COLORS.primary,
                            ...styles.cartItemContainer
                        }}
                        icon={icons.delete_icon}
                        iconStyle={{
                            marginRight: 10
                        }}
                        onPress={() => removeMyCartHandler(data.item.id)}
                    />
                )}
            />
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
            {renderCartList()}
            <FooterTotal 
                subTotal={39.50}     
                shippingFee={5}             
                total={44.50}     
                onPress={() => navigation.navigate('MyCard')}     
            />
        </View>
    )
}

const styles = StyleSheet.create({
    cartItemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: SIZES.radius,
        paddingHorizontal: SIZES.radius,
        borderRadius: SIZES.radius
    }
})

export default MyCart;