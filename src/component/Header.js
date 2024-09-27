import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import cartImage from '../Assest/Images/cart.png';
import logo from '../Assest/Images/menu.png';

const Header = () => {
    const [cartItemCount, setCartItemCount] = useState(0); // Initialize with a default value
    const cartCount = useSelector(state => state.product.count);

    // Effect to load initial cart data from AsyncStorage
    useEffect(() => {
        const fetchCartData = async () => {
            try {
                const cart = await AsyncStorage.getItem('cart');
                if (cart) {
                    // Parse the cart data and update the count 
                    const cartItems = JSON.parse(cart);
                    setCartItemCount(cartItems.length);
                } else {
                    setCartItemCount(0);
                }
            } catch (error) {
                console.error('Error fetching cart data:', error);
            }
        };

        fetchCartData();
    }, []); // Empty dependency array to run once on mount

    // Update cartItemCount based on cartCount from Redux store
    useEffect(() => {
        setCartItemCount(cartCount);
    }, [cartCount]); // Dependency array with cartCount to update on change

    return (
        <View style={styles.header}>
            <Image
                source={logo}
                style={{ width: 40, height: 40, borderRadius: 20 }}
                resizeMode="contain"
            />
            <Text style={styles.shoping}>shoping.com</Text>
            <View style={styles.imageContainer}>
                <Image
                    source={cartImage}
                    style={{ width: 20, height: 20 }}
                    resizeMode="contain"
                />
                <Text style={styles.headerText}>{cartItemCount}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 60,
        backgroundColor: '#00bfff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
    },
    headerText: {
        color: '#FFF',
        fontSize: 20,
        fontWeight: '600',
        marginLeft: 12,
    },
    imageContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    shoping: {
        color: '#00394d',
        fontSize: 25,
        fontWeight: '700',
    },
});

export default Header;
