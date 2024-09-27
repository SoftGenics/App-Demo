import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect, useNavigation } from '@react-navigation/native'; // Import useFocusEffect

// import DraverNavigator from '../drawerNavigator/DraverNavigator';


const Order = () => {
    const navigation = useNavigation(); // Get navigation object
    const [cartItems, setCartItems] = useState([]);

    // Use useFocusEffect to load cart items whenever the screen is focused
    useFocusEffect(
        useCallback(() => {
            // Load cart items when the screen is focused
            loadCartItems();
        }, [])
    );

    // Load cart items from AsyncStorage
    const loadCartItems = async () => {
        try {
            const cart = await AsyncStorage.getItem('cart');
            if (cart) {
                setCartItems(JSON.parse(cart));
            } else {
                setCartItems([]); // If no cart items, set an empty array
            }
        } catch (error) {
            console.error('Error loading cart:', error);
        }
    };

    const renderCartItem = ({ item }) => (
        <View style={styles.cartItem}>
            <Image source={item.source} style={styles.cartItemImage} />
            <View style={styles.cartItemDetails}>
                <Text style={styles.cartItemTitle}>{item.title}</Text>
                <Text style={styles.cartItemPrice}>{item.price}</Text>
                <Text style={styles.cartItemQuantity}>Quantity: {item.quantity}</Text>
            </View>
        </View>
    );

    return (
        <>
            <View style={styles.container}>
                <Text style={styles.cartTitle}>Your Order</Text>
                {cartItems.length === 0 ? (
                    <Text style={styles.emptyCartText}>Your Order is empty.</Text>
                ) : (
                    <FlatList
                        data={cartItems}
                        renderItem={renderCartItem}
                        keyExtractor={(item) => item.id}
                    />
                )}
               

                <Button
                    title="Back"
                    onPress={() => navigation.goBack()} // Proper way to navigate back
                />
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 20,
        marginBottom: 20,
    },

    cartTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    cartItem: {
        flexDirection: 'row',
        padding: 10,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        backgroundColor: '#f9f9f9',
    },
    cartItemImage: {
        width: 80,
        height: 80,
        resizeMode: 'contain',
        marginRight: 10,
    },
    cartItemDetails: {
        flex: 1,
        justifyContent: 'center',
    },
    cartItemTitle: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    cartItemPrice: {
        fontSize: 14,
        color: '#555',
        marginTop: 5,
    },
    cartItemQuantity: {
        fontSize: 14,
        color: '#888',
        marginTop: 5,
    },
    emptyCartText: {
        textAlign: 'center',
        fontSize: 16,
        color: '#888',
        marginTop: 20,
    },
    clearCartButton: {
        marginTop: 20,
        backgroundColor: '#e53935',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    clearCartText: {
        color: '#fff',
        fontSize: 16,
    },
});

export default Order;
