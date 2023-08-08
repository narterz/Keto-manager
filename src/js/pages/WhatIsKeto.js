import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {motion} from 'framer-motion';
import {TbMeat} from 'react-icons/tb';
import {FiSlash} from 'react-icons/fi'; 
import {GiPowder, GiWeightScale} from 'react-icons/gi';

//TODO
    //implement section that explains the various keto variants

function WhatIsKeto(){
    const meat = <TbMeat size={40} className='whatKeto--icons'/>;
    const sugar = <GiPowder size={40} id='sugar'/>;
    const noSlash = <FiSlash size={70} className='whatKeto--icons'/>;
    const scale = <GiWeightScale size={40} className='whatKeto--icons'/>;

    return (
        <Container fluid id='whatKeto__wrapper'>
            <Container className='flex-row d-flex' id='whatKeto'>
                <Row className='w-50 d-flex flex-column'>
                    <Col className='p-4 what-row w-100 h-25 d-flex justify-content-between flex-column' xl={4}>
                        <h2 className='display-3'>What is Keto?</h2>
                        <p className='mt-4 text-justify lead' id='whatKeto__subtitle'>"Keto" short for Ketogenic diet is a low-carbohydrate, high-fat diet that has gained popularity in recent years for its potential weight loss benefits and other health advantages</p>
                    </Col>
                    <Col className="what-info w-100 h-75 d-flex justify-content-evenly flex-column" xl={8}>
                        <Row className='whatKeto__row'>
                            <Col xl={3}  className='whatKeto__icon-wrapper'>
                                {meat}
                            </Col>
                            <Col xs={9} className='whatKeto__text-wrapper'>
                                <h3>Heavy Fat</h3>
                                <p className='lead'>Heavy consumption of fatty foods like oils, nuts, and fatty meats are essential to keto</p>
                            </Col>
                        </Row>
                        <Row className='whatKeto__row'>
                            <Col xl={3} className='whatKeto__icon-wrapper'>
                                {noSlash}
                                {sugar}
                            </Col>
                            <Col xl={9} className='whatKeto__text-wrapper'>
                                <h3>Limited Carbs</h3>
                                <p className='lead'>Carb intake has to be reduced significantly, avoid grains, lugumes, and sugary and starchy foods</p>
                            </Col>
                        </Row>
                        <Row className='whatKeto__row'>
                            <Col xl={3} className='whatKeto__icon-wrapper'>
                                {scale}
                            </Col>
                            <Col xl={9} className='whatKeto__text-wrapper'>
                                <h3>Weight Loss Benefits</h3>
                                <p className='lead'>Increase fat and reduced carbs forces the body to use fat as a fuel source, helping you burn more fat</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className="w-50">
                    <Col className='d-flex justify-content-center align-items-start position-relative'>
                        <motion.img
                            src='https://images.unsplash.com/photo-1574926054530-540288c8e678?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
                            alt='chicken and cream spinach'
                            className='mt-auto mb-auto rounded w-100'
                            id='whatKeto__img'>
                        </motion.img>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default WhatIsKeto;
