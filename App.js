import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';

import CustomDrawer from './navigation/CustomDrawer';

import { createStore, applyMiddleware } from "redux";
import { Provider } from 'react-redux';
import thunk from "redux-thunk"; 
import rootReducer from "./stores/rootReducer";
import { AddCard, FoodDetail, Checkout, DeliveryStatus, ForgotPassword, Map, MyCard, OnBoarding, Otp, SignIn, SignUp, Success, MyOrders, MyCoupons } from "./screens";
import SplashScreen from 'react-native-splash-screen'
import MyCart from "./screens/Cart/MyCart";

import { enableLatestRenderer } from 'react-native-maps';

enableLatestRenderer();

const Stack = createStackNavigator();

const store = createStore(
    rootReducer,applyMiddleware(thunk)    
)

const App = () => {

    React.useEffect(() => {
        SplashScreen.hide();
    }, [])

    return (
        <Provider store={store}>
            <NavigationContainer>                
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false
                    }}
                    initialRouteName={'OnBoarding'}
                >
                    <Stack.Screen 
                        name="MyCoupons"
                        component={MyCoupons}
                    />

                    <Stack.Screen 
                        name="MyOrders"
                        component={MyOrders}
                    />

                    <Stack.Screen
                        name="FoodDetail"
                        component={FoodDetail}
                    />

                    <Stack.Screen
                        name="Checkout"
                        component={Checkout}
                    />

                    <Stack.Screen
                        name="MyCart"
                        component={MyCart}
                    />

                    <Stack.Screen
                        name="Success"
                        component={Success}
                        options={{gestureEnabled: false}}
                    />

                    <Stack.Screen
                        name="AddCard"
                        component={AddCard}
                    />

                    <Stack.Screen
                        name="MyCard"
                        component={MyCard}
                    />

                    <Stack.Screen
                        name="DeliveryStatus"
                        component={DeliveryStatus}
                        options={{gestureEnabled: false}}
                    />

                    <Stack.Screen
                        name="Map"
                        component={Map}
                    />                    

                    <Stack.Screen
                        name="OnBoarding"
                        component={OnBoarding}
                    />

                    <Stack.Screen
                        name="SignIn"
                        component={SignIn}
                    />

                    <Stack.Screen
                        name="SignUp"
                        component={SignUp}
                    />

                    <Stack.Screen
                        name="ForgotPassword"
                        component={ForgotPassword}
                    />

                    <Stack.Screen
                        name="Otp"
                        component={Otp}
                    />

                    <Stack.Screen
                        name="Home"
                        component={CustomDrawer}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    )
}

export default App