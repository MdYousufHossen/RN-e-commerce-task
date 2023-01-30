import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Title from '../components/Title';

const brand=[
    {   
        name:"Maruti",
        img: require("../assest/brand-1.jpeg")
    },
    {   
        name:"Hyundai",
        img: require("../assest/brand-hyundai.png")
    },
    {   
        name:"Tata",
        img: require("../assest/brand-tata.png")
    },
    {
        name:"Mahindra",
        img: require("../assest/brand-butterfly.jpeg")
    },
    {   
        name:"Maruti",
        img: require("../assest/brand-1.jpeg")
    },
    {   
        name:"Hyundai",
        img: require("../assest/brand-hyundai.png")
    },
    {   
        name:"Tata",
        img: require("../assest/brand-tata.png")
    },
    {
        name:"Mahindra",
        img: require("../assest/brand-butterfly.jpeg")
    }
]

const PopularBrands = () => {
    return (
        <View style={styles.container}>
            <Title text="Popular Brands"/>
            <View style={styles.brandContainer}>
                {
                   brand.map(item=>
                        <View style={styles.boxContainer}>
                        <Image style={styles.image} source={item.img}/>
                        <Text style={styles.text}>{item.name}</Text>
                   </View>
                        )
                }  
                <TouchableOpacity style={styles.btn}>
                <Text>View All Brands</Text>
            </TouchableOpacity>
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
        justifyContent: "center",
        width: "100%",    
    },
    boxContainer:{
        margin: 5
    },
    image: {
        resizeMode: 'contain',
        width: 80,
        height: 70,
        borderRadius: 10,
    },
    text:{
        textAlign:"center"
    },
    btn:{
        // textAlign:"center",
        backgroundColor: "#f75e34",
        width: 150,
        height: 40,
        borderRadius: 20,
        marginVertical: "auto",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        color: "white",
    }
    })
export default PopularBrands;