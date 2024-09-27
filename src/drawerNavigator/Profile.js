import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';

const Profile = () => {
    const [isLoading, setIsLoading] = useState(true); // Loading state
    const navigation = useNavigation();

    useEffect(() => {
        // Simulate a data fetch delay of 3 seconds
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3000);

        return () => clearTimeout(timer); // Cleanup the timer
    }, []);

    return (
        <>
            {isLoading ? (
                // Display ActivityIndicator while loading
                <View style={styles.loaderContainer}>
                    <ActivityIndicator size="large" color="#6200ea" />
                    <Text>Loading Products...</Text>
                </View>
            ) : (
                <ScrollView style={styles.container}>
                    <TouchableOpacity style={styles.profileHeader}>
                        <Image
                            source={require('../Assest/Images/profile.png')} // Replace with actual profile image URL or local image path
                            style={styles.profileImage}
                        />
                        <View style={styles.userInfo}>
                            <Text style={styles.userName}>Mahima Choudhary</Text>
                            <Text style={styles.userAddress}>123 Main St, Kurji More, Patna</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.menuItem} onPress={()=> navigation.navigate('Order')}>
                        <Text style={styles.menuTitle}>My Orders</Text>
                        <Text style={styles.menuSubtitle}>Track, cancel and return orders</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.menuItem} onPress={()=> navigation.navigate('CustomerSuport')}>
                        <Text style={styles.menuTitle}>Customer Support</Text>
                        <Text style={styles.menuSubtitle}>Help regarding your purchase</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.menuItem} onPress={()=> navigation.navigate('EliteMemberShip')}>
                        <Text style={styles.menuTitle}>Elite Membership</Text>
                        <Text style={styles.menuSubtitle}>Offers and rewards</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.menuItem} onPress={()=> navigation.navigate('MyWishlist')}>
                        <Text style={styles.menuTitle}>My Wishlist</Text>
                        <Text style={styles.menuSubtitle}>Your favourite Products</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.menuItem} onPress={()=> navigation.navigate('MyBeautyProfile')}>
                        <Text style={styles.menuTitle}>My Beauty Profile</Text>
                        <Text style={styles.menuSubtitle}>Profile that represent you</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.menuItem} onPress={()=> navigation.navigate('MyPaymentProfile')}>
                        <Text style={styles.menuTitle}>My Payments</Text>
                        <Text style={styles.menuSubtitle}>Details About your payments and saved</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.menuItem} onPress={()=> navigation.navigate('MyAddressProfile')}>
                        <Text style={styles.menuTitle}>My Address</Text>
                        <Text style={styles.menuSubtitle}>Save address for faster</Text>
                    </TouchableOpacity>

                    {/* Add more menu items as needed */}
                </ScrollView>
            )}
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    profileHeader: {
        flexDirection: 'row',
        padding: 16,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    profileImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 16,
    },
    userInfo: {
        flex: 1,
    },
    userName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 3,
    },
    userAddress: {
        fontSize: 14,
        color: '#666',
    },
    menuItem: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    menuTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
    },
    menuSubtitle: {
        fontSize: 12,
        color: '#666',
    },
    loaderContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Profile;
