import React from 'react';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';

const items = [
    {
       
        text: "Cars under 5 Lakh"
    },
    {
        
        text: "5 Lakh to 10 Lakh"
    },
    {
       
        text: "10 Lakh to 15 Lakh"
    },
    {
       
        text: "15 Lakh to 20 Lakh"
    },
    {
       
        text: "20 Lakh to 25 Lakh"
    },
    {
     
        text: "25 Lakh to 30 Lakh"
    },
   
]

const PriceCate = () => {
    return (
        <View  style={{
            marginTop: 5,
            backgroundColor: "#fff",
            paddingVertical: 10,
           
        }}>
           <ScrollView horizontal showsHorizontalScrollIndicator={false} >
           <FlatList
                    contentContainerStyle={{ flexDirection: 'row' }}
                    data={items}
                    keyExtractor={(item) => item.name}
                    renderItem={({ item }) => (
                        <View style={{ alignItems: "center", marginRight: 10 }}>
                            <Text
                                style={styles.text}
                            > {item.text}</Text>
                        </View>
                    )}
                />
            </ScrollView>  
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 13,
        fontWeight: "900",
        borderColor:'black',
        borderWidth:1, 
        borderRadius:10, 
        paddingHorizontal:10,
        paddingVertical:10, 
        marginTop:5,
    },
  });

export default PriceCate;