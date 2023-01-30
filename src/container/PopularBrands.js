import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Title from '../components/Title';

const PopularBrands = () => {
    return (
        <View style={styles.container}>
            <Title text="Popular Brands"/>
            <View style={styles.brandContainer}>
                {
                    [...new Array(6)].map(item=>
                        <View style={styles.boxContainer}>
                        <Image style={styles.image} source={require("../assest/car.jpeg")}/>
                        <Text style={styles.text}>Maruti</Text>
                   </View>
                        )
                }  
            </View>
        </View>
    );
};

const styles= StyleSheet.create({
    container:{
        marginTop: 25,
    },
    brandContainer:{
        flexDirection:"row",
        flexWrap: "wrap",
        justifyContent: "center"    
    },
    boxContainer:{
        margin: 5
    },
    image: {
        resizeMode: 'stretch',
        width: 100,
        height: 80,
        borderRadius: 10,
    },
    text:{
        textAlign:"center"
    }
    })
export default PopularBrands;