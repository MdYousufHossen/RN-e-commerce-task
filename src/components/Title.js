import React from 'react';
import { StyleSheet, Text } from 'react-native';

const Title = ({text}) => {
    return (
        <Text style={styles.text}>{text}</Text>
    );
};
const styles= StyleSheet.create({
text:{
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
}
})

export default Title;