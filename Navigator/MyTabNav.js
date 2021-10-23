import * as React from 'react';
import { View, Text, TouchableNativeFeedback, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FavoriteScreen from '../Screens/FavoriteScreen';
import Color from '../constant/Color';

import MealCategories from '../Screens/MealCategories';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ScreenNavigate from './ScreenNavigate';
import MealDetails from '../Screens/MealDetails';

const TabNav = createBottomTabNavigator();

const MyTabNav = ({ navigation }) => {

    return (

        <TabNav.Navigator>
            <TabNav.Screen name="Meal-Categories" component={MealCategories}
                options={{
                    headerTintColor: 'white',
                    tabBarLabel: 'Meal'.toLocaleUpperCase(),
                    tabBarActiveBackgroundColor: Color.primarycolor,
                    headerLeft: () => (
                        <TouchableNativeFeedback
                            onPress={() => { { navigation.toggleDrawer() } }}>
                            <Icon name="bars" size={20} color="white" style={styles.ico} />
                        </TouchableNativeFeedback>
                    ),
                    headerTitleStyle: {
                        fontFamily: 'font3'
                    },
                    headerStyle: {
                        backgroundColor: Color.primarycolor
                    },
                    tabBarLabelStyle: {
                        fontSize: 12,
                        fontWeight: 'bold',
                        fontFamily: 'font1'
                    },
                    tabBarLabelPosition: "beside-icon",
                    tabBarActiveTintColor: 'white',
                    tabBarInactiveTintColor: 'blue',
                    tabBarStyle: {
                        height: 60,
                    },
                    tabBarIcon: (tabinfo) => {

                        return <Icon name="utensils" size={20}
                            color={tabinfo.focused ? "white" : "blue"} />
                    }
                }} />
            <TabNav.Screen name="fav" component={FavoriteScreen}
                options={{
                    headerTitle: 'My-Favorites',
                    headerTintColor: 'white',
                    headerTitleAlign: 'center',
                    tabBarLabel: 'My-Favorite'.toLocaleUpperCase(),
                    tabBarActiveBackgroundColor: Color.primarycolor,
                    headerTitleStyle: {
                        fontFamily: 'font3'
                    },
                    headerStyle: {
                        backgroundColor: Color.primarycolor,
                    },
                    headerLeft: () => (
                        <TouchableNativeFeedback onPress={() => { navigation.toggleDrawer() }}>
                            <Icon name="bars" size={20} color="white" style={styles.ico} />
                        </TouchableNativeFeedback>
                    ),
                    tabBarLabelStyle: {

                        fontSize: 12,
                        fontWeight: 'bold',
                        marginStart: 17
                    },
                    tabBarLabelPosition: "beside-icon"
                    , tabBarActiveTintColor: 'white',
                    tabBarInactiveTintColor: 'blue',
                    tabBarStyle: {
                        height: 60,
                    },
                    tabBarIcon: (tabinfo) => {

                        return <Icon name="star" size={20} color={tabinfo.focused ? "white" : "blue"} />

                    }

                }} />
        </TabNav.Navigator>



    );
};
const styles = StyleSheet.create({
    ico: {
        marginStart: 15
    }
});

export default MyTabNav;