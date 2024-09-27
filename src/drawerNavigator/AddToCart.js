import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { productCount } from '../redux/action';

const AddToCartScreen = () => {
    const [cartItems, setCartItems] = useState([]);
    const dispatch = useDispatch();

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
                const items = JSON.parse(cart);
                setCartItems(items);
                handleCount(items.length);
            } else {
                setCartItems([]); // If no cart items, set an empty array
                handleCount(0);
            }
        } catch (error) {
            console.error('Error loading cart:', error);
        }
    };

    // Clear all items from the cart
    const clearCart = async () => {
        try {
            await AsyncStorage.removeItem('cart');
            setCartItems([]);
            handleCount(0);
            Alert.alert('Success', 'Cart cleared successfully.');
        } catch (error) {
            console.error('Error clearing cart:', error);
            Alert.alert('Error', 'Failed to clear cart.');
        }
    };

    const handleCount = (count) => {
        dispatch(productCount(count));
    };

    // Delete a single item from the cart
    const deleteCartItem = async (id) => {
        try {
            const cart = await AsyncStorage.getItem('cart');
            let cartItems = cart ? JSON.parse(cart) : [];

            const updatedCart = cartItems.filter((item) => item.id !== id);
            setCartItems(updatedCart);
            handleCount(updatedCart.length); // Update the count after deletion

            await AsyncStorage.setItem('cart', JSON.stringify(updatedCart));
            Alert.alert('Success', 'Item removed from cart.');
        } catch (error) {
            console.error('Error deleting cart item:', error);
            Alert.alert('Error', 'Failed to delete item.');
        }
    };

    // Calculate the total price of all items in the cart
    const calculateTotalPrice = () => {
        return cartItems.reduce((total, item) => {
            // Remove currency symbol and commas, and convert to number
            const itemPrice = parseFloat(item.price.replace(/[^0-9.-]+/g, ''));
            return total + itemPrice * item.quantity;
        }, 0);
    };

    // Buy items (you can define what this action should do)
    const handleBuy = () => { 
        Alert.alert('Purchase', 'Proceeding to checkout...');
        // Implement buy functionality
    };

    // Render each item in the cart
    const renderCartItem = ({ item }) => (
        <View style={styles.cartItem}>
            <Image source={item.source} style={styles.cartItemImage} />
            <View style={styles.cartItemDetails}>
                <Text style={styles.cartItemTitle}>{item.title}</Text>
                <Text style={styles.cartItemPrice}>${item.price}</Text>
                <Text style={styles.cartItemQuantity}>Quantity: {item.quantity}</Text>
            </View>
            <TouchableOpacity onPress={() => deleteCartItem(item.id)} style={styles.deleteButton}>
                <Text style={styles.deleteButtonText}>X</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.cartTitle}>Cart Items</Text>
            {cartItems.length === 0 ? (
                <Text style={styles.emptyCartText}>Your cart is empty.</Text>
            ) : (
                <FlatList
                    data={cartItems}
                    renderItem={renderCartItem}
                    keyExtractor={(item) => item.id}
                />
            )}
            {cartItems.length > 0 && (
                <>
                    <Text style={styles.totalPriceText}>Total Price: ${calculateTotalPrice().toFixed(2)}</Text>
                    <TouchableOpacity style={styles.buyButton} onPress={handleBuy}>
                        <Text style={styles.buyButtonText}>Buy</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.clearCartButton} onPress={clearCart}>
                        <Text style={styles.clearCartText}>Clear Cart</Text>
                    </TouchableOpacity>
                </>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#fff',
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
    deleteButton: {
        width: 20,
        height: 30,
        backgroundColor: '#e53935',
        padding: 5,
        borderRadius: 5,
        alignItems: 'center',
    },
    deleteButtonText: {
        color: '#fff',
        fontSize: 14,
    },
    emptyCartText: {
        textAlign: 'center',
        fontSize: 16,
        color: '#888',
        marginTop: 20,
    },
    totalPriceText: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    buyButton: {
        marginTop: 10,
        backgroundColor: '#4caf50',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    buyButtonText: {
        color: '#fff',
        fontSize: 16,
    },
    clearCartButton: {
        marginTop: 10,
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

export default AddToCartScreen;
