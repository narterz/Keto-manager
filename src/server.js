const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(cors());

const uri = "mongodb+srv://narterz:<iyaz06851>@cluster0.o8ciar1.mongodb.net/?retryWrites=true&w=majority";

async function connect() {
    try {
        await mongoose.connect(uri);
        console.log("Connected to mongoDB");
    } catch (error) {
        console.error(error)
    }
}

connect();

const generateMealSchema = new mongoose.Schema({
    diet: 'ketogenic',
    fillIngredients: true,
    addRecipeNutrition: true,
    number: 9
})

const Meal = mongoose.model("Meal", generateMealSchema);

app.get('/api/fetchMeals', async (req, res) => {
    try {
        const meal = await Meal.find();
        res.json(meal);
    } catch (error) {
        console.error(error);
    }
})


app.listen(PORT, () => {
    console.log("Server started on port 3002");
});
