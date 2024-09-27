import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Ensure react-navigation is installed and configured

const MyAddressProfile = () => {
    const navigation = useNavigation();

    const handleBack = () => {
        navigation.goBack(); // Navigate back to the previous screen
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={handleBack} style={styles.backButton}>
                    <Text style={styles.backButtonText}>Back</Text>
                </TouchableOpacity>
                <Text style={styles.header}>My Address Profile</Text>
            </View>
            <View style={styles.content}>
                <Text style={styles.description}>
                    Manage your saved addresses for a seamless checkout experience. Add, edit, or remove your addresses easily.
                </Text>
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Saved Addresses</Text>
                    <View style={styles.addressItem}>
                        <Text style={styles.addressTitle}>Home Address</Text>
                        <Text style={styles.addressDetails}>1234 Beauty Lane, New York, NY 10001, USA</Text>
                    </View>
                    <View style={styles.addressItem}>
                        <Text style={styles.addressTitle}>Office Address</Text>
                        <Text style={styles.addressDetails}>5678 Work Street, New York, NY 10005, USA</Text>
                    </View>
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
    section: {
        backgroundColor: '#e0e0e0',
        padding: 15,
        borderRadius: 8,
        marginBottom: 10,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5,
    },
    addressItem: {
        backgroundColor: '#d9d9d9',
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
    },
    addressTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#444',
    },
    addressDetails: {
        fontSize: 14,
        color: '#666',
    },
});

export default MyAddressProfile;
