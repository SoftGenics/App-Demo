import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, FlatList, Dimensions, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import CartEventEmitter from '../utils/EventEmitter'
import {useDispatch} from 'react-redux'
import {productCount} from '../redux/action'

// Dummy product data
const products = [
    {
        id: '1',
        source: require('../Assest/Images/img1.png'),
        title: 'Rosewater Hydration Mist',
        price: '₹199',
        originalPrice: '₹299',
        discount: '33% off',
    },
    {
        id: '2',
        source: require('../Assest/Images/img5.png'),
        title: 'Aloe Vera & Vitamin E Gel',
        price: '₹225',
        originalPrice: '₹400',
        discount: '44% off',
    },
    {
        id: '3',
        source: require('../Assest/Images/img2.png'),
        title: 'Cucumber Cooling Face Mask',
        price: '₹250',
        originalPrice: '₹450',
        discount: '45% off',
    },
    {
        id: '4',
        source: require('../Assest/Images/img3.png'),
        title: 'Green Tea Detox Cleanser',
        price: '₹275',
        originalPrice: '₹399',
        discount: '31% off',
    },
    {
        id: '5',
        source: require('../Assest/Images/img4.png'),
        title: 'Shea Butter Nourishing Cream',
        price: '₹210',
        originalPrice: '₹350',
        discount: '40% off',
    },
    {
        id: '6',
        source: require('../Assest/Images/img5.png'),
        title: 'Lavender Soothing Gel',
        price: '₹190',
        originalPrice: '₹300',
        discount: '37% off',
    },
    {
        id: '7',
        source: require('../Assest/Images/img6.png'),
        title: 'Vitamin C Glow Serum',
        price: '₹299',
        originalPrice: '₹499',
        discount: '40% off',
    },
    {
        id: '8',
        source: require('../Assest/Images/img7.png'),
        title: 'Cocoa Butter Body Lotion',
        price: '₹260',
        originalPrice: '₹400',
        discount: '35% off',
    },
    {
        id: '9',
        source: require('../Assest/Images/img8.png'),
        title: 'Charcoal Purifying Mask',
        price: '₹220',
        originalPrice: '₹320',
        discount: '31% off',
    },
    {
        id: '10',
        source: require('../Assest/Images/img9.png'),
        title: 'Himalayan Salt Scrub',
        price: '₹240',
        originalPrice: '₹380',
        discount: '37% off',
    },
    {
        id: '11',
        source: require('../Assest/Images/img10.png'),
        title: 'Tea Tree Acne Treatment',
        price: '₹180',
        originalPrice: '₹280',
        discount: '36% off',
    },
    {
        id: '12',
        source: require('../Assest/Images/img11.png'),
        title: 'Avocado Moisture Cream',
        price: '₹225',
        originalPrice: '₹375',
        discount: '40% off',
    },
    {
        id: '13',
        source: require('../Assest/Images/img12.png'),
        title: 'Jojoba Oil Serum',
        price: '₹275',
        originalPrice: '₹450',
        discount: '39% off',
    },
];

 
const screenWidth = Dimensions.get('window').width;

const Product = () => {
    const [isLoading, setIsLoading] = useState(true); // Loading state
    const dispatch = useDispatch()

    const handleCount = (count) => {
        // console.log('cartItems.length', count)
        dispatch(productCount(count))
    }

    useEffect(() => {
        // Simulate a data fetch delay of 3 seconds
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3000);

        return () => clearTimeout(timer); // Cleanup the timer
    }, []);

    const addToCart = async (product) => {
        try {
            const cart = await AsyncStorage.getItem('cart');
            let cartItems = cart ? JSON.parse(cart) : [];
    
            // Check if the product is already in the cart
            const existingProduct = cartItems.find(item => item.id === product.id);
            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                cartItems.push({ ...product, quantity: 1 });
                handleCount(cartItems.length)
                // console.log('cartItems count', cartItems.length)
            }
    
            await AsyncStorage.setItem('cart', JSON.stringify(cartItems));
            // CartEventEmitter.emit('cartUpdated'); // Emit cart update event
            Alert.alert('Success', `${product.title} added to cart`);
        } catch (error) {
            console.error('Error adding to cart:', error);
            Alert.alert('Error', 'Failed to add product to cart');
        }
    };

    const renderItem = ({ item }) => (
        <View>
            <View style={styles.productCard}>
                <Image
                    source={item.source}
                    style={styles.productImage}
                    onError={(error) => console.log('Image Load Error:', error.nativeEvent.error)}
                />
                <Text style={styles.productTitle}>{item.title}</Text>
                <Text style={styles.productPrice}>
                    {item.price} <Text style={styles.originalPrice}>{item.originalPrice}</Text> {item.discount}
                </Text>

            </View>
            <TouchableOpacity style={styles.addToCartButton} onPress={() => addToCart(item)}>
                <Text style={styles.addToCartText}>Add to Cart</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require('../Assest/Images/img4.png')} style={styles.logo} />
                <View style={styles.headerIcons}>
                    <TouchableOpacity>
                        <Image source={require('../Assest/Images/img1.png')} style={styles.icon} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../Assest/Images/img2.png')} style={styles.icon} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../Assest/Images/img5.png')} style={styles.icon} />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.banner}>
                <Image source={require('../Assest/Images/img4.png')} style={styles.bannerImage} />
            </View>

            <Text style={styles.saleText}>Sale is live</Text>

            <View style={styles.featuredContainer}>
                <Text style={styles.featuredText}>FEATURED</Text>
                <TouchableOpacity>
                    <Text style={styles.viewAllText}>View All →</Text>
                </TouchableOpacity>
            </View>

            {isLoading ? (
                // Display ActivityIndicator while loading
                <View style={styles.loaderContainer}>
                    <ActivityIndicator size="large" color="#6200ea" />
                    <Text>Loading Products...</Text>
                </View>
            ) : (
                // Display product list when loading is complete
                <FlatList
                    data={products}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    numColumns={3}
                    columnWrapperStyle={styles.columnWrapper}
                    showsVerticalScrollIndicator={false}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#f8f8f8',
    },
    logo: {
        width: 100,
        height: 30,
        resizeMode: 'contain',
    },
    headerIcons: {
        flexDirection: 'row',
    },
    icon: {
        width: 24,
        height: 24,
        marginHorizontal: 8,
    },
    banner: {
        height: 200,
        marginTop: 10,
        marginBottom: 10,
    },
    bannerImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    saleText: {
        textAlign: 'center',
        fontSize: 18,
        marginVertical: 10,
        fontWeight: 'bold',
    },
    featuredContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        marginTop: 10,
    },
    featuredText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    viewAllText: {
        color: '#6200ea',
    },
    columnWrapper: {
        justifyContent: 'space-between',
        marginHorizontal: 10,
    },
   
    productCard: {
        width: (screenWidth / 3) - 20,
        height:200,
        margin: 5,
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 10,
        alignItems: 'center',
    },
    productImage: {
        width: '100%',
        height: 100,
        resizeMode: 'contain',
    },
    productTitle: {
        fontSize: 14,
        textAlign: 'center',
        marginTop: 5,
    },
    productPrice: {
        fontSize: 14,
        marginTop: 5,
    },
    originalPrice: {
        textDecorationLine: 'line-through',
        color: '#888',
    },
    loaderContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    addToCartButton: {
        marginTop: 10,
        backgroundColor: '#6200ea',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    addToCartText: {
        color: '#fff',
        fontSize: 14,
        textAlign: 'center',
    },
});

export default Product;
