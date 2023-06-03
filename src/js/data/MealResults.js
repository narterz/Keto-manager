//Helper function to retrive all of the data that needs to be displayed

export const RetriveMealData = (results) => {
    //traverses nutrients key in response to get specific meal data by index
    const retiriveNutrient = (nutrients, index) => {
        const nutrient = nutrients[index];
        return [{
            name: nutrient.name,
            amount: nutrient.amount,
            unit: nutrient.unit
        }]
    };

    const mealResults = results.map((result) => ({
        title: result.title,
        image: result.image,
        mealDishTypes: result.dishTypes,
        isVegetarian: result.vegetarian,
        isGlutenFree: result.glutenFree,
        calories: retiriveNutrient(result.nutrition.nutrients, 0),
        fat: retiriveNutrient(result.nutrition.nutrients, 1),
        protein: retiriveNutrient(result.nutrition.nutrients, 8),
        carbs: retiriveNutrient(result.nutrition.nutrients, 3),
        ingredients: [...result.nutrition.ingredients],
    }));

    return mealResults
} 