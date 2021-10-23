import * as React from 'react';
import { TouchableNativeFeedback } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealCategoriesScreen from '../Screens/MealCategoriesScreen';
import MealCategories from '../Screens/MealCategories';
import MealDetails from '../Screens/MealDetails';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Color from '../constant/Color';
import DrawerNav from './DrawerNav';
import SplashScreen from '../Screens/SplashScreen';

const Stack = createNativeStackNavigator();


const ScreenNavigate = ({navigation}) => {

  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen name="Meal-Categories"
        component={DrawerNav}
        options={{
          headerShown: false,
          headerTitleAlign: 'center',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: Color.primarycolor
          },
        }}
      />
      <Stack.Screen name="SplashScreen" component={SplashScreen}
      options={{headerShown:false}}/>
      <Stack.Screen name="mealCategory"
        component={MealCategoriesScreen}
        options={{
          headerTitleAlign: 'center',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: Color.primarycolor,
          },headerTitleStyle:{

            fontFamily:'font3'

          }
        }}

      />
      <Stack.Screen name="MealDetails"
        component={MealDetails}
        options={{
          headerTitleAlign: 'left',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: Color.primarycolor
          },
          headerTitleStyle:{

            fontFamily:'font3'

          }
        }}
      />
    </Stack.Navigator>
    </NavigationContainer>

  );
};

export default ScreenNavigate;