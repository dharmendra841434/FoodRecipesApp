import * as React from 'react';
import { View, Text } from 'react-native';
import ScreenNavigate from './Navigator/ScreenNavigate';
import {createStore,combineReducers} from 'redux';
import{Provider} from 'react-redux';
import MealReducer from './store/reducer/MealReducer';

const RootReducer = combineReducers({
    meals:MealReducer
});

const mystore = createStore(RootReducer);

const App = () => {

    return (
        <Provider store={mystore}>
        <ScreenNavigate/>
        </Provider>
    );
};

export default App;
