import greekSalad from '../../alt-icons/icons8-greek-salad-48.png';
import guacamole from '../../alt-icons/icons8-guacamole-48.png';
import salad from '../../alt-icons/icons8-salad-48.png';

export const ketoVariations = {
    skd: {
        name: "Standard Keto Diet",
        image: <img
            src={greekSalad}
            alt="greek salad graphic"
            className='ketoVar--icons' />,
        macros: {
            calories: { name: "Calories", value: 2000, unit: "Kcal" },
            fat: { name: "Fat", value: 170, unit: "G" },
            protein: { name: "Protein", value: 70, unit: 'G' },
            carbs: { name: "Carbs", value: 10, unit: "G" }
        },
        description: "The most popular and strictest variation with high fat and low protein and carbs",
    },
    tkd: {
        name: "Targeted Keto Diet",
        image: <img
            src={salad}
            alt="salad graphic"
            className='ketoVar--icons' />,
        macros: {
            calories: { name: "Calories", value: 2000, unit: "Kcal" },
            fat: { name: "Fat", value: 160, unit: "G" },
            protein: { name: "Protein", value: 70, unit: 'G' },
            carbs: { name: "Carbs", value: 20, unit: "G" }
        },
        description: 'Popular amoung atheltes and active individuals that require more carbs for energy',
    },
    skd: {
        name: "High Protein Keto Diet",
        image: <img
            src={guacamole}
            alt="gucamole graphic"
            className='ketoVar--icons' />,
        macros: {
            calories: { name: "Calories", value: 2000, unit: "Kcal" },
            fat: { name: "Fat", value: 150, unit: "G" },
            protein: { name: "Protein", value: 85, unit: 'G' },
            carbs: { name: "Carbs", value: 15, unit: "G" }
        },
        description: 'The least strict keto variation that allows for a more moderate amount of protein',
    },
}