import React, { useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, Image, } from 'react-native';
import {useSelector,useDispatch} from 'react-redux';
import FavBtn from "../Componants/FavBtn";
import Color from '../constant/Color';
import {YourFavorites} from '../store/action/meals';

const ItemView = (props) => {
    return (
        <View style={styles.itemview}>
            <Text style={styles.title} numberOfLines={2}>{props.children}</Text>
        </View>
    );

};
const MealDetails = (props) => {
    const { MealID } = props.route.params;

    const AvailableMeals = useSelector(state => state.meals.filteredmeals);
    const selectedMeal = AvailableMeals.find(cat => cat.id === MealID);

    const Mydispatch = useDispatch();

    const FavoriteMealHandler = () =>{
        Mydispatch(YourFavorites(MealID));
    }

    useEffect(() => {
        props.navigation.setOptions({
            title: selectedMeal.title,
            headerRight: () => (
                <FavBtn />
            ),
        })
    });

    return (
        <ScrollView style={styles.fvrt}>
            <Image source={{ uri: selectedMeal.imageUrl }} style={styles.img} />
            <View style={styles.details}>
                <Text style={styles.txt}>{selectedMeal.duration}M</Text>
                <Text style={styles.txt}>{selectedMeal.affordability}</Text>
                <Text style={styles.txt}>{selectedMeal.complexity}</Text>
            </View>
                        <Text style={styles.listHeading}>INGREDIENTS</Text>
            {selectedMeal.ingredients.map(ingredient => <ItemView key={ingredient}>{ingredient}</ItemView>)}
                        <Text style={styles.listHeading}>STEPS</Text>
            {selectedMeal.steps.map(step => <ItemView key={step}>{step}</ItemView>)}

                   

        </ScrollView>
    );
};
const styles = StyleSheet.create({
    fvrt: {
        backgroundColor: Color.appbg
    },
    details: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'white'

    },
    img: {
        width: '100%',
        height: 130,
        marginTop: 3
    },
    txt: {
        color: 'black',
        fontFamily: "font1"
    },
    listHeading: {
        fontFamily: 'font2',
        color: 'black',
        marginVertical: 10,
        marginStart: 130,
        fontSize: 17

    },
    list:{
        flexDirection:'column'
    },
    itemview: {
        marginHorizontal: 10,
        marginVertical: 5,
        borderColor: Color.primarycolor,
        borderWidth: 1.3,
        height: 50,
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginStart: 20,
        borderRadius: 5
    },
    title: {
        marginStart: 10,
        color: 'black',
        fontWeight: '600'
    }

});
export default MealDetails;