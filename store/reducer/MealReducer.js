import { MEALS } from "../../data/Dummy-Data";
import {YOUR_FAV} from '../action/meals';

const initialstate = {
    meal:MEALS,
    filteredmeals:MEALS,
    favorites:[]
}

const MealReducer = (state=initialstate,action) =>{
    switch (action.type) {
        case YOUR_FAV:
            const existingIndex = state.favorites.findIndex(meal=>meal.id===action.mealId);
            if(existingIndex>=0)
            {
                const upadtedMeals =[...state,favorites];
                upadtedMeals.splice(existingIndex,1)
                return{...state,favorites:upadtedMeals};
            }else{
                return{...state,favorites:state.favorites.concat(state.meal.find(meal=>meal.id===meal))}
            }
    
        default:
            return state;
    }
    
};

export default MealReducer;