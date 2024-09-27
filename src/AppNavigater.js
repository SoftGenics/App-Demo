import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../src/screen/Splash'
import Login from '../src/screen/Login'
import Home from '../src/screen/Home'
import Order from '../src/screen/Order'
import CustomerSuport from './screen/CustomerSuport';
import EliteMemberShip from './screen/EliteMemberShip';
import MyWishlist from './screen/MyWishlist';
import MyAddressProfile from './screen/MyAddressProfile';
import MyBeautyProfile from './screen/MyBeautyProfile';
import MyPaymentProfile from './screen/MyPaymentProfile';

const AppNavigater = ()=> {
  const Stack = createNativeStackNavigator();

  return (
  <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="Splash" component={Splash} />
        <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
        <Stack.Screen options={{ headerShown: false }} name="Home" component={Home} />
        <Stack.Screen options={{ headerShown: false }} name="Order" component={Order} />
        <Stack.Screen options={{ headerShown: false }} name="CustomerSuport" component={CustomerSuport} />
        <Stack.Screen options={{ headerShown: false }} name="EliteMemberShip" component={EliteMemberShip} />
        <Stack.Screen options={{ headerShown: false }} name="MyWishlist" component={MyWishlist} />
        <Stack.Screen options={{ headerShown: false }} name="MyAddressProfile" component={MyAddressProfile} />
        <Stack.Screen options={{ headerShown: false }} name="MyBeautyProfile" component={MyBeautyProfile} />
        <Stack.Screen options={{ headerShown: false }} name="MyPaymentProfile" component={MyPaymentProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigater;
