import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import Banner from '../components/Banner';
import Category from '../components/Category';
import CarsByBudget from '../container/CarsByBudget';
import PopularBrands from '../container/PopularBrands';

const Home = () => {
    return (
        <SafeAreaView style={styles.container}>
          <View style={{ backgroundColor: "white", padding: 15 }}>
            <ScrollView>
                <Banner/>
                <Category/>
                <CarsByBudget/>
                <PopularBrands/>
            </ScrollView>
          </View>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    //   alignItems: 'center',
      // justifyContent: 'center',
    },
  });
export default Home;