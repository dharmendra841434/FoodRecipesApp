import React from 'react';
import { View, Text, TouchableNativeFeedback, StyleSheet ,FlatList} from 'react-native';
import Color from '../constant/Color';
import { useSelector } from 'react-redux';
import MealItems from '../Componants/MealItems';

const FavoriteScreen = (props) => {

    const renderMeal = itemData => {
        return (
            <MealItems onSelectedMeal={() => {
                props.navigation.navigate('MealDetails', {
                    MealID: itemData.item.id,
                })
            }}
                mytitle={itemData.item.title}
                Duration={itemData.item.duration}
                Afford={itemData.item.affordability}
                complexity={itemData.item.complexity}
                bgimage={itemData.item.imageUrl}
            />
        );
    };


    const AvailableMeals = useSelector(state => state.meals.meal);
    const DisplayItems = AvailableMeals.filter(meal=>meal.id ==='m1' || meal.id==='m2');
    return (
        <View style={styles.screen}>
            <FlatList data={DisplayItems}
                keyExtractor={(item, index) => item.id}
                renderItem={renderMeal} style={{ width: '100%' }} />
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

export default FavoriteScreen;