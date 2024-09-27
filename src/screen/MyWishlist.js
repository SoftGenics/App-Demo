import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Make sure react-navigation is set up

const MyWishlist = () => {
    const navigation = useNavigation();

    const handleBack = () => {
        navigation.goBack(); // Navigate back to the previous screen
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={handleBack} style={styles.backButton}>
                    <Text style={styles.backButtonText}>← Back</Text>
                </TouchableOpacity>
                <Text style={styles.header}>My Wishlist</Text>
            </View>
            <View style={styles.content}>
                <Text style={styles.description}>
                    Here are your saved items. You can add items to your wishlist for easy access later!
                </Text>
                <View style={styles.itemBox}>
                    <Text style={styles.itemTitle}>Item 1</Text>
                    <Text style={styles.itemDescription}>Description of the first wishlist item.</Text>
                </View>
                <View style={styles.itemBox}>
                    <Text style={styles.itemTitle}>Item 2</Text>
                    <Text style={styles.itemDescription}>Description of the second wishlist item.</Text>
                </View>
                <View style={styles.itemBox}>
                    <Text style={styles.itemTitle}>Item 3</Text>
                    <Text style={styles.itemDescription}>Description of the third wishlist item.</Text>
                </View>
                <View style={styles.itemBox}>
                    <Text style={styles.itemTitle}>Item 4</Text>
                    <Text style={styles.itemDescription}>Description of the fourth wishlist item.</Text>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    backButton: {
        marginRight: 10,
        padding: 10,
    },
    backButtonText: {
        color: '#007bff',
        fontSize: 16,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
    content: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 4,
    },
    description: {
        fontSize: 16,
        color: '#666',
        marginBottom: 20,
    },
    itemBox: {
        backgroundColor: '#e0e0e0',
        padding: 15,
        borderRadius: 8,
        marginBottom: 10,
    },
    itemTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5,
    },
    itemDescription: {
        fontSize: 14,
        color: '#444',
    },
});

export default MyWishlist;
