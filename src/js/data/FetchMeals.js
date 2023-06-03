import axios from 'axios';
import { RetriveMealData } from './MealResults';

const ApiKey = process.env.REACT_APP_API_KEY;
const generatedMeals = "https://api.spoonacular.com/recipes/complexSearch?apiKey=" + ApiKey;
const searchKetoMeal = "https://api.spoonacular.com/recipes/complexSearch?apiKey=" + ApiKey;

export const FetchMealData = async () => {
    try {
        const response = await axios.get(generatedMeals, {
            params: {
                diet: 'ketogenic',
                fillIngredients: true,
                addRecipeNutrition: true,
                number: 9
            }
        });
        const results = response.data.results;
        const mealData = RetriveMealData(results);

        return mealData
    } catch {
        console.log("An error has occured! Data could not be retrived");
    }
}

export const FetchMealSearch = async (mealQuery) => {
    try {
        const response = await axios.get(searchKetoMeal , {
            params: {
                query: mealQuery,
                diet: 'ketogenic',
                fillIngredients: true,
                addRecipeNutrition: true,
                number: 1
            },
        });
        const results = response.data.results;
        const mealData = RetriveMealData(results);

        return mealData
    } catch (error) {
        console.log(error);
        throw error;
    }
};

