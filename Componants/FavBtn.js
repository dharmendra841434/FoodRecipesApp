import React from "react";
import { View, StyleSheet, TouchableNativeFeedback, ToastAndroid } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const FavBtn = (props) => {
    return (

        <TouchableNativeFeedback onPress={()=>{
            ToastAndroid.show("Item Added To Favorite",ToastAndroid.SHORT)
        }}>
            <Icon name="star" size={20} color="white" />
        </TouchableNativeFeedback>
    );
};

const styles = StyleSheet.create({});

export default FavBtn;
