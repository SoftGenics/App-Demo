import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Ensure react-navigation is installed and configured

const MyBeautyProfile = () => {
    const navigation = useNavigation();

    const handleBack = () => {
        navigation.goBack(); // Navigates back to the previous screen
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={handleBack} style={styles.backButton}>
                    <Text style={styles.backButtonText}>Back</Text>
                </TouchableOpacity>
                <Text style={styles.header}>My Beauty Profile</Text>
            </View>
            <View style={styles.content}>
                <Text style={styles.description}>
                    Customize your beauty preferences and manage your profile details to get personalized recommendations.
                </Text>
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Profile Details</Text>
                    <Text style={styles.sectionItem}>Name: Jane Doe</Text>
                    <Text style={styles.sectionItem}>Skin Type: Combination</Text>
                    <Text style={styles.sectionItem}>Hair Type: Curly</Text>
                    <Text style={styles.sectionItem}>Favorite Brands: Brand A, Brand B</Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Beauty Preferences</Text>
                    <Text style={styles.sectionItem}>Preferred Makeup Style: Natural</Text>
                    <Text style={styles.sectionItem}>Favorite Colors: Nude, Pink</Text>
                    <Text style={styles.sectionItem}>Allergies: None</Text>
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
    sectionItem: {
        fontSize: 14,
        color: '#444',
        marginVertical: 2,
    },
});

export default MyBeautyProfile;
