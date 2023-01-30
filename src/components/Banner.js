import React from 'react';
import { Dimensions, Image, StyleSheet, View } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
const Banner = () => {
    const { width } = Dimensions.get('window');

    return (
        <View style={{ flex: 1 }}>
        <Carousel
            loop
            width={width}
            height={width / 2}
            autoPlay={true}
            data={[...new Array(6).keys()]}
            scrollAnimationDuration={1000}
            onSnapToItem={(index) => console.log('current index:', index)}
            renderItem={({ index }) => (
                <View
                    style={styles.carusel}
                >
                    <Image style={styles.image} source={require("../assest/car-banner.jpg")}/>
                   
                </View>
            )}
        />
    </View>
    );
};

const styles = StyleSheet.create({
    carusel:{
        flex: 1,
        borderWidth: 1,
        justifyContent: 'center',
    },
    image:{
        resizeMode: 'cover',
        height: 200,
        width: 400,
    }
  });
export default Banner;