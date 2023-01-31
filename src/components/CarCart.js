import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { responsiveHeight, responsiveWidth } from '../utils/ResposiveUI';

const CarCart = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require("../assest/car.jpeg")}/>
            <Text style={styles.name}>Maruti Alto 800</Text>
            <Text style={styles.price}>3.39- 5.03 Lakh</Text>
            <Text style={styles.offer}>View All Offers</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    container:{
        margin:8
        
    },
    image: {
        resizeMode: 'stretch',
        width: responsiveWidth(170),
        height:responsiveHeight(150),
        borderRadius: 10,
    },
    name: {
        fontSize: 15,
    },
    price: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    offer: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#f75e34',
    }
  });
export default CarCart;