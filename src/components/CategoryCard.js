import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const CategoryCard = ({name,desc,color}) => {
    return (
        <View style={styles(color).container}>
            <Text style={styles().text}>{name}</Text>
            <Text style={styles().desc}>{desc}</Text>
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
    justifyContent: 'center',
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
    }
  });
export default CategoryCard;