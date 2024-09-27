import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Ensure you have react-navigation installed

const EliteMembership = () => {
    const navigation = useNavigation();

    const handleBack = () => {
        navigation.goBack(); // Go back to the previous screen
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={handleBack} style={styles.backButton}>
                    <Text style={styles.backButtonText}>← Back</Text>
                </TouchableOpacity>
                <Text style={styles.header}>Elite Membership</Text>
            </View>
            <View style={styles.content}>
                <Text style={styles.description}>
                    Welcome to the Elite Membership program! Enjoy exclusive benefits and premium features designed to enhance your experience.
                </Text>
                <View style={styles.benefitBox}>
                    <Text style={styles.benefitTitle}>Exclusive Benefits:</Text>
                    <Text style={styles.benefitItem}>- Priority Support</Text>
                    <Text style={styles.benefitItem}>- Early Access to New Features</Text>
                    <Text style={styles.benefitItem}>- Special Discounts</Text>
                    <Text style={styles.benefitItem}>- VIP Events</Text>
                </View>
                <TouchableOpacity style={styles.joinButton}>
                    <Text style={styles.joinButtonText}>Join Now</Text>
                </TouchableOpacity>
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
    benefitBox: {
        marginBottom: 20,
    },
    benefitTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333',
    },
    benefitItem: {
        fontSize: 16,
        color: '#444',
        marginVertical: 2,
    },
    joinButton: {
        backgroundColor: '#007bff',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 10,
    },
    joinButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default EliteMembership;
