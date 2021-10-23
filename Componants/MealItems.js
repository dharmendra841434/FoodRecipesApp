import React from 'react';
import { View, Text, StyleSheet, TouchableNativeFeedback, ImageBackground } from 'react-native';
import Color from '../constant/Color';
import DefaultText from './DefaultText';
const MealItems = props => {

    return (
        <View style={styles.screen}>
            <TouchableNativeFeedback onPress={props.onSelectedMeal}>
                <View>
                    <View style={{ ...styles.mealRow, ...styles.header }}>
                        <ImageBackground source={{ uri: props.bgimage }}
                            style={styles.imgstyle}>
                            <View style={styles.titleconatiner}>
                                <DefaultText style={styles.titlestyle} numberOfLines={2}>{props.mytitle}</DefaultText>
                            </View>
                        </ImageBackground>
                    </View>
                    <View style={{ ...styles.mealRow, ...styles.details }}>
                        <DefaultText style={styles.deatiltxt}>{props.Duration} MINUTES</DefaultText>
                        <DefaultText style={styles.deatiltxt}>{props.Afford.toUpperCase()}</DefaultText>
                        <DefaultText style={styles.deatiltxt}>{props.complexity.toUpperCase()}</DefaultText>
                    </View>
                </View>
            </TouchableNativeFeedback>
        </View>
    );

};

const styles = StyleSheet.create({

    screen: {
        height: 200,
        width: '100%',
        backgroundColor: '#f5f5f5',
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        marginVertical: 5,
        overflow: 'hidden'

    },
    MainContainer: {
        marginVertical: 5,
        borderRadius: 10
    },
    imgstyle: {
        height: '100%',
        width: '100%',
        justifyContent: 'flex-end'
    },
    titleconatiner: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        paddingVertical: 5,
        paddingHorizontal: 12
    },
    titlestyle: {
        fontSize: 17,
        color: 'white',
        textAlign: 'center'

    },
    mealRow: {
        flexDirection: 'row',
    },
    header: {
        height: '85%',
    },
    details: {
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '15%'

    },
    deatiltxt: {
        color: 'black'
    }

});

export default MealItems;