import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Product from './Product';
import Profile from './Profile';
import AddToCart from './AddToCart';
// import addCart from '../Assest/Images/addCart.png'

const Tab = createBottomTabNavigator();

const DraverNavigator = () => {
    return (
        <Tab.Navigator
            initialRouteName="Product"  // Set Product as the default screen
            screenOptions={{
                headerShown: false,
                tabBarLabelStyle: { fontSize: 12, fontWeight: '600' },
                tabBarIconStyle: { marginTop: 5 },
            }}

        >
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={require('../Assest/Images/profile.png')}
                            style={styles.icon}
                            resizeMode="contain"
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Product"
                component={Product}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={require('../Assest/Images/product.png')}
                            style={styles.icon}
                            resizeMode="contain"
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="AddToCart"
                component={AddToCart}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={require('../Assest/Images/addCart.png')}
                            style={styles.icon}
                            resizeMode="contain"
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24,
    },
});

export default DraverNavigator;
