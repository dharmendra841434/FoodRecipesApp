import React,{useState} from 'react';
import { View, TouchableOpacity, StyleSheet, Text, TouchableNativeFeedback, ImageBackground, StatusBar } from 'react-native'
import Color from '../constant/Color';

const CategoriesListItems = (props) => {
   

    return (

        <View style={styles.ItemGride}>
            <View style={styles.container}>
                <ImageBackground source={{ uri: props.imgurl }} style={styles.imgstyle}>
                    <TouchableNativeFeedback onPress={props.onSelect}>
                        <View style={styles.titleconatiner}>
                            <Text style={styles.titlestyle} numberOfLines={2}>{props.title}</Text>
                        </View>
                    </TouchableNativeFeedback>
                </ImageBackground>
            </View>
        </View>

    )

}

const styles = StyleSheet.create({

    ItemGride: {
        flex: 1,
        height: 150,
        margin: 5,
        borderRadius: 10,
        elevation: 16,
        overflow: 'hidden',
        backgroundColor:'white'
    },
    container: {
        flex: 1,
        borderRadius: 10,
        

    },
    imgstyle: {
        height: '100%',
        width: '100%',
        justifyContent: 'center'

    },
    titlestyle: {
        color: 'white',
        fontSize: 16,
        alignItems: 'center',
        fontFamily:'font1'
    },
    titleconatiner: {
        backgroundColor: 'rgba(0,0,0,0.6)',
        paddingVertical: 5,
        paddingHorizontal: 12,
        height: 150,
        justifyContent: 'center',
        alignItems: 'center'
    },


});

export default CategoriesListItems;