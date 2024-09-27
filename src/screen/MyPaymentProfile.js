import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Ensure react-navigation is installed and configured

const MyPaymentProfile = () => {
    const navigation = useNavigation();

    const handleBack = () => {
        navigation.goBack(); // Navigate back to the previous screen
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={handleBack} style={styles.backButton}>
                    <Text style={styles.backButtonText}> Back</Text>
                </TouchableOpacity>
                <Text style={styles.header}>My Payment Profile</Text>
            </View>
            <View style={styles.content}>
                <Text style={styles.description}>
                    Manage your saved payment methods and billing information for a smoother checkout experience.
                </Text>
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Saved Payment Methods</Text>
                    <View style={styles.paymentItem}>
                        <Text style={styles.paymentTitle}>Visa Ending in 1234</Text>
                        <Text style={styles.paymentDetails}>Exp: 12/24</Text>
                    </View>
                    <View style={styles.paymentItem}>
                        <Text style={styles.paymentTitle}>MasterCard Ending in 5678</Text>
                        <Text style={styles.paymentDetails}>Exp: 06/25</Text>
                    </View>
                </View>
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Billing Address</Text>
                    <Text style={styles.billingItem}>1234 Beauty Lane</Text>
                    <Text style={styles.billingItem}>New York, NY 10001</Text>
                    <Text style={styles.billingItem}>USA</Text>
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
    paymentItem: {
        backgroundColor: '#d9d9d9',
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
    },
    paymentTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#444',
    },
    paymentDetails: {
        fontSize: 14,
        color: '#666',
    },
    billingItem: {
        fontSize: 14,
        color: '#444',
        marginVertical: 2,
    },
});

export default MyPaymentProfile;
