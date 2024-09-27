import React, { useEffect } from 'react';
import { Image, View } from 'react-native';
import logo from '../Assest/Images/logo.jpg';
import { useNavigation } from '@react-navigation/native';

const Splash = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login'); // Ensure 'About' screen exists in your navigator
    }, 2000);
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000' }}>
      <Image
        source={logo}
        style={{ width: 200, height: 200, marginTop: 20 }}
        resizeMode="contain"
      />
    </View>
  );
}

export default Splash;
