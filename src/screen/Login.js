import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import logo from '../Assest/Images/logo.jpg';

const Login = () => {
    const navigation = useNavigation();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleLogin = () => {
        // Validate the form fields
        // console.log(name)
        // console.log(email)
        // console.log(phoneNumber)
        // if (name == "Mahima Kumari" && email == 'Mahima143@gmail.com' && phoneNumber == '1431431430') {

        if (name !== "" && email !== '' && phoneNumber !== '') {
            // Alert.alert('Success', 'Correct credentials');
            setTimeout(() => {
                navigation.navigate('Home'); // Navigate to Home screen after successful login
            }, 1000);
        } else {
            Alert.alert('Error', 'Please enter valid name, email and phone number.');
        }
    };

    return (
        <View style={styles.container}>
            <Image
                source={logo}
                style={{ width: 100, height: 100, marginTop: 20, marginBottom: 20, borderRadius: 50 }}
                resizeMode="contain"
            />
            <Text style={styles.title}>Login</Text>

            <TextInput
                style={styles.input}
                placeholder="Enter Your Name"
                placeholderTextColor="#999"
                value={name}
                onChangeText={(text) => setName(text)}
            />

            <TextInput
                style={styles.input}
                placeholder="Enter Your Email"
                placeholderTextColor="#999"
                keyboardType="email-address"
                value={email}
                onChangeText={(text) => setEmail(text)}
            />

            <TextInput
                style={styles.input}
                placeholder="Enter Your Number"
                placeholderTextColor="#999"
                keyboardType='numeric'
                value={phoneNumber}
                onChangeText={(text) => setPhoneNumber(text)}
                maxLength={10} // Restrict input to 10 digits
            />

            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EFEFEF',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: '600',
        color: '#333',
        marginBottom: 20,
    },
    input: {
        width: '90%',
        height: 50,
        backgroundColor: '#FFF',
        borderRadius: 10,
        paddingHorizontal: 15,
        marginBottom: 15,
        fontSize: 16,
        color: '#333',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
    },
    loginButton: {
        backgroundColor: 'blue',
        paddingVertical: 15,
        width: '90%',
        borderRadius: 25,
        alignItems: 'center',
        marginTop: 10,
    },
    loginButtonText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: '600',
    },
});

export default Login;
