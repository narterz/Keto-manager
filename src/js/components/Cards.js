import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { TbSalad } from 'react-icons/tb';
import { BsTruck, BsCupStraw } from 'react-icons/bs';
import { GiPlantSeed } from 'react-icons/gi';
import { FaLeaf, FaIceCream, FaBreadSlice } from 'react-icons/fa';
import { RxSun } from 'react-icons/rx';
import { CiApple, CiForkAndKnife } from 'react-icons/ci';

const leafLogo = <FaLeaf size={30} className='leafLogo' />
const breadLogo = <FaBreadSlice size={30} className='breadLogo' />;

const displayLogos = (meal) => {
    const breakfastLogo = <RxSun size={30} className='breakfastLogo' />;
    const dinnerLogo = <CiForkAndKnife size={30} className='dinnerLogo' />;
    const snackLogo = <CiApple size={30} className='snackLogo' />;
    const dessertLogo = <FaIceCream size={30} className='dessertLogo' />;
    const drinkLogo = <BsCupStraw size={30} className='drinkLogo' />

    let dishType = null;
    let dishTypeLogo = null;

    const identifyDishType = expr => {
        return meal?.mealDishTypes?.includes(expr) || false;
    }

    switch (true) {
        case identifyDishType("breakfast"):
            dishType = "Breakfast";
            dishTypeLogo = breakfastLogo;
            break;
        case identifyDishType("dinner"):
            dishType = "Dinner";
            dishTypeLogo = dinnerLogo;
            break;
        case identifyDishType("dessert"):
            dishType = "Dessert";
            dishTypeLogo = dessertLogo;
            break;
        case identifyDishType("snack"):
            dishType = "Snack"
            dishTypeLogo = snackLogo;
            break;
        case identifyDishType("drink"):
            dishType = "Drink";
            dishTypeLogo = drinkLogo;
            break;
        default:
            console.log("Cannot find meal dish type");
    }

    return { type: dishType, logo: dishTypeLogo };
}

export const HeroCard = () => {

    const salad = <TbSalad style={{ height: "80%", width: "80%" }} />;
    const truck = <BsTruck style={{ height: "80%", width: "80%" }} />;
    const plant = <GiPlantSeed style={{ height: "80%", width: "80%" }} />;

    return (
        <Card className="card position-absolute w-75" id='card-lg'>
            <Row className='h-100'>
                <Col className="card-col" id='meals'>
                    <Col className='icon-col' xl={3}>
                        <div className="icon-wrap">
                            {salad}
                        </div>
                    </Col>
                    <Col className='card-text' xl={9}>
                        <h4>Choose From 3000+ Keto Meals</h4>
                        <p className='lead'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </Col>
                </Col>
                <Col className="card-col" id='deliv'>
                    <Col className='icon-col' xl={3}>
                        <div className="icon-wrap">
                            {truck}
                        </div>
                    </Col>
                    <Col className='card-text' xl={9}>
                        <h4>Fast Delivery Throught the US</h4>
                        <p className='lead'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </Col>
                </Col>
                <Col className="card-col" >
                    <Col className='icon-col' xl={3}>
                        <div className="icon-wrap">
                            {plant}
                        </div>
                    </Col>
                    <Col className='card-text' xl={9}>
                        <h4>Freshest ingridients</h4>
                        <p className='lead'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                    </Col>
                </Col>
            </Row>
        </Card>
    )
}

export const MealCardSmall = ({ meal }) => {

    const dishDisplays = displayLogos(meal);
    const dishType = dishDisplays.type;
    const dishTypeLogo = dishDisplays.logo;

    return (
        <Card id='mealCardSmall' className='h-75 w-75 d-flex flex-column position-relative'>
            <Card.Img variant='top' src={meal.image} id='mealCard__img' />
            <Card.Body className='cardBody d-flex flex-column justify-content-evenly'>
                <Card.Title className='mealCard__title text-start display-6' style={{ fontSize: '1.8rem' }}>{meal.title}</Card.Title>
                <hr id='titleSep' />
                <Card.Text className='mealCard__text lead'>{dishTypeLogo} {dishType}</Card.Text>
                {meal.isVegetarian
                    ? <Card.Text className='mealCard__text lead'>{leafLogo} Vegetarian</Card.Text>
                    : <Card.Text className='mealCard__text lead'>{leafLogo} Non vegetarian</Card.Text>
                }
                {meal.isGlutenFree
                    ? <Card.Text className='mealCard__text lead'>{breadLogo} Gluten free</Card.Text>
                    : <Card.Text className='mealCard__text lead'>{breadLogo} Non gluten free</Card.Text>
                }
                <Button className='mealCard__btn w-50 font-weight-bold lead border-none'>Learn More</Button>
            </Card.Body>
        </Card>
    )
}

export const MealCardLarge = ({ meal, mealType, ketoVariant }) => {

    const dishDisplays = displayLogos(meal);
    const dishTypeLogo = dishDisplays.logo;

    const mealMacros = [
        { 
            name: meal.calories.name, 
            amount: meal.calories.amount, 
            unit: meal.calories.unit
        },
        {
            name: meal.fat.name,
            amount: meal.fat.amount,
            unit: meal.fat.unit
        },
        {
            name: meal.protein.name,
            amount: meal.protein.amount,
            unit: meal.protein.unit
        },
        {
            name: meal.carbs.name,
            amount: meal.carbs.amount,
            unit: meal.carbs.unit
        },

    ]

    return (
        <Card>
            <Card.Header>
                <Card.Title>{dishTypeLogo} {meal.title}</Card.Title>
                <Card.Text className='mealCard__text lead'>{mealType}</Card.Text>
            </Card.Header>
            <Card.Body>
                <Row>
                    <Col>
                        <Card.Img src={meal.image} />
                    </Col>
                    <Col>
                        {meal.isVegetarian
                            ? <Card.Text className='mealCard__text lead'>{leafLogo} Vegetarian</Card.Text>
                            : <Card.Text className='mealCard__text lead'>{leafLogo} Non vegetarian</Card.Text>
                        }
                        {meal.isGlutenFree
                            ? <Card.Text className='mealCard__text lead'>{breadLogo} Gluten free</Card.Text>
                            : <Card.Text className='mealCard__text lead'>{breadLogo} Non gluten free</Card.Text>
                        }
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {mealMacros.map((macro) => {
                            return (
                                <Card.Text>
                                    {macro.name}: {macro.amount}{macro.unit}
                                </Card.Text>
                            )
                        })}
                    </Col>
                    <Col>
                        <ul>
                            {meal.ingredients.map((ingrids) => {
                                return (
                                    <li>{ingrids.name}: {ingrids.amount}{ingrids.unit}</li>
                                )
                            })}
                        </ul>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )
}

