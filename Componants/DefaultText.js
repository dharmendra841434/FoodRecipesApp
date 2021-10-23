import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DefaultText = (props) => {
    return(
        <View>
            <Text style={{...styles.title,...props.style}}>{props.children}</Text>
        </View>
    );
};

const styles = StyleSheet.create({

    title:{
        textAlign:'center',
        justifyContent:'center',
        fontFamily:'font3'
    }

});

export default DefaultText;