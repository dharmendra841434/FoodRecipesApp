import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import {Text,TouchableNativeFeedback,StyleSheet, ToastAndroid } from "react-native";
import FilterScreen from "../Screens/FilterScreen";
import MyTabNav from "./MyTabNav";
import Color from "../constant/Color";
import Icon from 'react-native-vector-icons/FontAwesome5';


const MyDrawer = createDrawerNavigator();
const DrawerNav = ({navigation}) => {
    return (
            <MyDrawer.Navigator>
                <MyDrawer.Screen name="Home" component={MyTabNav}
                    options={
                        {
                            headerShown: false
                        }

                    } />
                <MyDrawer.Screen name="Flters" component={FilterScreen}
                 options={{headerTitle: 'Filters',
                 headerTintColor: 'white',
                 headerTitleAlign:'center',
                 tabBarLabel: 'My-Favorite'.toLocaleUpperCase(),
                 tabBarActiveBackgroundColor: Color.primarycolor,
                 headerTitleStyle:{
                    fontFamily:'font3'
                  },
                 headerStyle: {
                     backgroundColor: Color.primarycolor,
                 },
                 headerLeft: () => (
                     <TouchableNativeFeedback onPress={()=>{{navigation.goBack()}}}>
                         <Icon name="arrow-left" size={20} color="white" style={styles.ico} />
                     </TouchableNativeFeedback>
                 ),
                 headerRight: () => (
                    <TouchableNativeFeedback onPress={()=>{ToastAndroid.show("Filters Apply", ToastAndroid.SHORT)}}>
                        <Text style={styles.save}>Apply</Text>
                     </TouchableNativeFeedback>
                )
                 ,
                 tabBarLabelStyle: {
     
                     fontSize: 12,
                     fontWeight: 'bold' ,
                     marginStart:5,
                 },
                 tabBarActiveTintColor: 'white',
                 tabBarInactiveTintColor: 'blue',
                 tabBarStyle: {
                     height: 60,
                 },
                 tabBarIcon: (tabinfo) => {
     
                     return <Icon name="star" size={20} color={tabinfo.focused ? "white" : "blue"} />
     
                 }
                 
                 }}

                />
            </MyDrawer.Navigator>
    );
};
const styles = StyleSheet.create({
    ico:{
        marginStart:15
    },
    save:
    {
        color:'blue',
        marginRight:15,
        fontFamily:'font2',
        fontSize:10,
        marginTop:8,
        backgroundColor:'white',
        padding:5,
        borderRadius:5
    }
});

export default DrawerNav;