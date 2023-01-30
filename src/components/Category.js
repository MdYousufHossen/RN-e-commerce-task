import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import CategoryCard from './CategoryCard';

const categoryData= [
    {
        key: 1,
        name:"New Cars",
        desc:"with exciting offers",
        color: "#995eec"
     },
    {
        key: 2,
        name:"Buy Used Cars",
        desc:"pre-owned cars for sale",
        color: "#f75e34"
     },
    {
        key: 3,
        name:"Sell Cars",
        desc:"from you home",
        color: "#5da8fb",
     },
    {
        key: 4,
        name:"News",
        desc:"to keep you updated",
        color: "#5e77ee"
     }
  ]
const Category = () => {
    return (
     <> 
        <FlatList 
        contentContainerStyle={styles.container}
        data={categoryData.slice(0,2)}
        renderItem={({item}) =><CategoryCard key={item.key} name={item.name} desc={item.desc} color={item.color}/>}
      />
        <FlatList 
        contentContainerStyle={styles.container}
        data={categoryData.slice(2.4)}
        renderItem={({item}) =><CategoryCard key={item.key} name={item.name} desc={item.desc} color={item.color}/>}
      />
      </> 
        
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
         marginTop: 10,
    },
  });
export default Category;