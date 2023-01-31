import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import CarCart from '../components/CarCart';
import PriceCate from '../components/PriceCate';
import Title from '../components/Title';

const CarsByBudget = () => {
    return (
        <View style={styles.container}>
           <Title text="Populer New Cars by Budget"/>
            <PriceCate/>
            <FlatList 
        contentContainerStyle={styles.flatListContainer}
        data={[...new Array(4)]}
        renderItem={({item}) =><CarCart/>}
      />
          
        </View>
    );
};
const styles= StyleSheet.create({
    container:{
        marginTop: 25,
    },
text:{
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
},
flatListContainer:{
    flexDirection: 'row',
    flexWrap:'wrap',
    width:"100%"
    // justifyContent: 'space-between',
},

})
export default CarsByBudget;