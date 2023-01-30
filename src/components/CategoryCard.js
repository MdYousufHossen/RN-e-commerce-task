import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const CategoryCard = ({name,desc,color, img}) => {
    return (
        <View style={styles(color).container}>
            <Text style={styles().text}>{name}</Text>
            <Text style={styles().desc}>{desc}</Text>
            <Image style={styles().img} source={img}/>
        </View>
    );
};
const styles=(color) => StyleSheet.create({
    container: {
    width:170,
    height:150,
    margin:5,
    borderRadius:15,
    borderWidth: 0,
    backgroundColor: color,
    alignItems: 'center',
    justifyContent: 'center',
    // marginHorizontal:'center'
    },
    text:{
        textAlign: 'center',
        color: 'white',
        fontSize:20,
        fontWeight:"600",
    },
    desc:{
        textAlign: 'center',
        color: 'white',
    },
    img:{
        resizeMode: 'stretch',
        width: 80,
        height: 50,
        marginHorizontal:"auto"
        
    }
  });
export default CategoryCard;