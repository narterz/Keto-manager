import React, { useState, useEffect, CSSProperties } from 'react';
import { FetchMealData, FetchMealSearch } from '../data/FetchMeals';
import { MealCardSmall } from '../components/Cards';
import { Container, Row, Button, Form, FormGroup, InputGroup, FloatingLabel } from 'react-bootstrap';
import { motion } from 'framer-motion';
import ClipLoader from 'react-spinners/ClipLoader';
import { ketoVariations } from '../data/KetoVariationData';

import { AiOutlineSearch } from 'react-icons/ai';
import dietIcon from '../../alt-icons/diet.png';
import healthyIcon from '../../alt-icons/healthy-food.png';
import saladIcon from '../../alt-icons/salad.png';

const searchLogo = <AiOutlineSearch size={20} style={{ color: 'white' }} />;

//TODO
//Add implementation that adds keto variants to the page (use ketoVariations data)
//Add conditional rendering for featured meals and meals searched
//Prevent application from crashing when Spoonacular data limit is reached
console.log(FetchMealData())

function Meal() {
    const [mealQuery, setMealQuery] = useState('');
    const [ketoVariant, setKetoVariant] = useState('any');
    const [mealType, setMealType] = useState('any');
    const [queryMealResults, setQueryMealResults] = useState([]);
    const [meal, setMeal] = useState([]);
    const [featuredMeals, setFeaturedMeals] = useState(null);
    const [mealIndex, setMealIndex] = useState(0);

    console.log(featuredMeals)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = FetchMealData();
                setMeal(data);
            } catch (error) {
                console.log("An error has occured, check API request limit");
            }
        };
        fetchData()
    }, [])

    useEffect(() => {
        if (meal && meal.length > 0) {
            if (mealIndex + 3 === meal.length) {
                setMealIndex(0)
            } else {
                setFeaturedMeals(meal.slice(mealIndex, mealIndex + 3));
            }
        }
    }, [mealIndex])

    useEffect(() => {
        const fetchQueryData = async () => {
            try {
                const data = FetchMealSearch(mealQuery);
                setQueryMealResults(data);
            } catch (error) {
                console.log("An error has occured, check API request limit");
            }
        };
        if (mealQuery.trim() == '') {
            setMealQuery('');
        } else {
            fetchQueryData();
        }
    }, [mealQuery]);


    const mealCardVariant = {
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: .5 }
        },
        hidden: {
            opacity: 0,
            y: -100
        }
    }

    const mealBackgroundIcons = [
        { src: dietIcon, alt: "graphic of bowl of vegetables", id: "veggieIcon" },
        { src: saladIcon, alt: 'graphic of salad bowl', id: "saladIcon" },
        { src: dietIcon, alt: 'graphic of diet food', id: "dietIcon" },
        { src: healthyIcon, alt: 'graphic of healthy foods', id: "healthyIcon" },
    ];

    return (
        <Container className="d-flex flex-column align-items-center position-relative" id='meal' fluid>
            {mealBackgroundIcons.map((icon) => {
                return (
                    <img src={icon.src} alt={icon.alt} id={icon.id} className='meal__background-icons position-absolute' />
                )
            })}
            <Row className='w-100 text-center d-flex flex-col justify-content-evenly' id='meal__header'>
                <h2 className='display-3 mt-5'>Search For Keto Meals</h2>
                <p className='lead'>Search for thousands of tasty and healthy keto meals to enjoy</p>
                <Form className='ketoForm h-50 w-50 d-flex justify-content-evenly flex-column' id='meal__form'>
                    <InputGroup id='meal__input'>
                        <InputGroup.Text id='seachLogo'>{searchLogo}</InputGroup.Text>
                        <Form.Control
                            placeholder='Enter food name'
                            type='text'
                            aria-describedby="searchLogo"
                            id='meal__search'
                            value={mealQuery}
                            onChange={e => {
                                setMealQuery(e.target.value)
                            }}
                        />
                    </InputGroup>
                    <FormGroup className='formgroup d-flex flex-row justify-content-between' controlId='ketoVarianForm'>
                        <FloatingLabel className='w-25' controlId='floatingLabelVariants' label="Select keto variant" style={{ color: 'black' }}>
                            <Form.Select
                                className='selects'
                                value={ketoVariant}
                                onChange={(e) => {
                                    setKetoVariant(e.target.value);
                                }}
                            >
                                <option>any</option>
                                <option value="2">Standard Keto Diet</option>
                                <option value="3">Targeted Keto Diet</option>
                                <option value="4">High Protein Keto Diet</option>
                            </Form.Select>
                        </FloatingLabel>
                        <FloatingLabel className='w-25' controlId='floatingLabelMeals' label="Select meal type" style={{ color: 'black' }}>
                            <Form.Select
                                className='selects'
                                value={mealType}
                                onChange={(e) => {
                                    setMealType(e.target.value);
                                }}
                            >
                                <Form.Label>Select meal type</Form.Label>
                                <option>any</option>
                                <option value='2'>Breakfast</option>
                                <option value="3">Main Course</option>
                                <option value="4">Snack</option>
                                <option value="5">Dessert</option>
                            </Form.Select>
                        </FloatingLabel>
                    </FormGroup>
                </Form>
            </Row>
            <Row className='w-75' id='meal__body'>
                <Row className='h-25 text-center'>
                    <h3 className='display-4 mt-5'>Featured Meals</h3>
                    <p className='subtitle lead'>Explore the hottest and tastiest meals customers recommend!</p>
                </Row>
                <Row className='meal__items h-75 position-relative'>
                    {featuredMeals && featuredMeals.length > 0 ? (
                        featuredMeals.map((mealItem, i) => (
                            <motion.div
                                key={'meal' + i}
                                id={'meal' + i}
                                className='meal-divs d-flex justify-content-center'
                                initial='hidden'
                                animate='visible'
                                variants={mealCardVariant}
                            >
                                <MealCardSmall meal={mealItem} index={i} />
                            </motion.div>
                        ))
                    ) : (
                        <ClipLoader color='#9dca00' size={100} id='meal__spinner'/>
                    )}
                    <Button className='btn-long' onClick={() => setMealIndex(mealIndex + 3)}>View More</Button>
                </Row>
            </Row>
        </Container>
    )
}

export default Meal;