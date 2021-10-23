import React from "react";
import { View, Text, StyleSheet, ImageBackground, Image, ColorPropType } from 'react-native';
import LottieView from 'lottie-react-native';
import Color from '../constant/Color';

const SplashScreen = (props) => {
    setTimeout(() => {

        props.navigation.replace("Meal-Categories");

    }, 5000);
    return (
        <View style={styles.img}>

            <Text style={styles.logotext}> Make Your Meals With Us</Text>        
                <LottieView source={require('../Images/Food.json')} autoPlay loop autoSize={false} />
        </View>

    );
};

const styles = StyleSheet.create({
    img: {
        flex: 1,
        width: '100%',
        height:100,
        backgroundColor: Color.primarycolor,
        
    },
    logotext: {
        fontSize: 25,
        marginTop: 45,
        color: 'white',
        marginStart:20,
        fontFamily:'font1',
        fontWeight:'bold'


    },
    logo:{
        borderColor:'white',
        borderWidth:5

    }

});

export default SplashScreen;
;