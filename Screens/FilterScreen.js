import React,{useState} from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import Color from '../constant/Color';

const FilterScreen = () => {

    const [Glutinfree,setGlutinfree] = useState(false);
    const [Vegan,setVegan] = useState(false);
    const [Vegetarian,setVegetarian] = useState(false);
    const [LactoseFree,setLactoseFree] = useState(false);

    return (
        <View style={styles.screen}>
            <Text style={styles.header}> FILTER </Text>
                <View style={styles.filterstyle}>
                    <Text style={styles.title}>Gluten-Free</Text>
                    <Switch value={Glutinfree} onValueChange={setGlutinfree}/>
                </View>
                <View style={styles.filterstyle}>
                    <Text style={styles.title}>Vegan</Text>
                    <Switch value={Vegan} onValueChange={setVegan}/>
                </View>
                <View style={styles.filterstyle}>
                    <Text style={styles.title} >Vegetarian</Text>
                    <Switch value={Vegetarian} onValueChange={setVegetarian}/>
                </View>
                <View style={styles.filterstyle}>
                    <Text style={styles.title} >LactoseFree</Text>
                    <Switch value={LactoseFree} onValueChange={setLactoseFree}/>
                </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: Color.appbg,
    },
    filterstyle: {
        marginHorizontal: 30,
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop:20
    },
    title:{
        color:'black',
        fontFamily:'font1',
    },
    header:{
        fontSize:22,
        fontFamily:'font2',
        marginStart:120,
        marginTop:20,color:'black'
    }

});

export default FilterScreen;