import React, { useEffect } from "react";
import {useSelector} from 'react-redux';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';
import { CATEGORIES ,MEALS} from "../data/Dummy-Data";
import Color from "../constant/Color";
import MealItems from "../Componants/MealItems";
const MealCategoriesScreen = (props) => {

    const renderMeal = itemData => {
        return (
            <MealItems onSelectedMeal={()=>{props.navigation.navigate('MealDetails',{
                MealID: itemData.item.id,
            })}}
            mytitle={itemData.item.title}
            Duration={itemData.item.duration}
            Afford={itemData.item.affordability}
            complexity={itemData.item.complexity}
            bgimage={itemData.item.imageUrl}
            />
        );
    };

   
    const { CatId } = props.route.params;
    const selectedCategory = CATEGORIES.find(cat => cat.id === CatId);

    const AvailbleMeals = useSelector(state => state.meals.filteredmeals);
    const DisplayItems = AvailbleMeals.filter(meal => meal.categoryIds.indexOf(CatId) >= 0);

    useEffect(() => {

        props.navigation.setOptions({
            title: selectedCategory.title
        })
    });


    return (

        <View style={styles.screen}>
            <FlatList data={DisplayItems}
                keyExtractor={(item, index) => item.id}
                renderItem={renderMeal} style={{width:'100%'}} />
        </View>
        
    );
};
const styles = StyleSheet.create({

    screen: {
        lignItems: 'center',
        juflex: 1,
        astifyContent: 'center',
        backgroundColor:Color.appbg
    }

});
export default MealCategoriesScreen;