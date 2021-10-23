import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, TouchableNativeFeedback, StatusBar } from 'react-native';
import { CATEGORIES } from "../data/Dummy-Data";
import CategoriesListItems from "../Componants/CategoriesListItems";
import Color from "../constant/Color";



const MealCategories = props => {


    const renderItemGride = (itemData) => {

        return (
            <CategoriesListItems
                title={itemData.item.title}
                imgurl={itemData.item.imageUrl}
                onSelect={() => {
                    props.navigation.navigate('mealCategory', {
                        CatId: itemData.item.id,
                    })
                }} />
                
        );
    };
    return (
        <FlatList keyExtractor={(item, index) => item.id}
            numColumns={2} data={CATEGORIES}
            renderItem={renderItemGride} style={styles.screen} />
    );
};
const styles = StyleSheet.create({
    screen: {
        backgroundColor: Color.appbg
    },
    
});
export default MealCategories;

