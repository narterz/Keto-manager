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
            <Container className='d-flex flex-row' id='whatKeto'>
                <Row className='w-50 d-flex flex-column'>
                    <Col className='what-row p-4 w-100 h-25 d-flex justify-content-between flex-column' xl={4}>
                        <h2 className='display-3'>What is Keto?</h2>
                        <p className='lead text-justify mt-4' id='whatKeto__subtitle'>"Keto" short for Ketogenic diet is a low-carbohydrate, high-fat diet that has gained popularity in recent years for its potential weight loss benefits and other health advantages</p>
                    </Col>
                    <Col className="what-info w-100 h-75 d-flex justify-content-evenly flex-column" xl={8}>
                        <Row className='whatKeto__row'>
                            <Col xl={3}  className='whatKeto__icon-wrapper'>
                                {meat}
                            </Col>
                            <Col xs={9} className='whatKeto__text-wrapper'>
                                <h3>Heavy Fat</h3>
                                <p className='lead'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti praesentium laborum dolorem quos facere.</p>
                            </Col>
                        </Row>
                        <Row className='whatKeto__row'>
                            <Col xl={3} className='whatKeto__icon-wrapper'>
                                {noSlash}
                                {sugar}
                            </Col>
                            <Col xl={9} className='whatKeto__text-wrapper'>
                                <h3>Limited Carbs</h3>
                                <p className='lead'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui molestiae sint soluta ducimus provident?</p>
                            </Col>
                        </Row>
                        <Row className='whatKeto__row'>
                            <Col xl={3} className='whatKeto__icon-wrapper'>
                                {scale}
                            </Col>
                            <Col xl={9} className='whatKeto__text-wrapper'>
                                <h3>Weight Loss Benefits</h3>
                                <p className='lead'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, doloribus a. Sapiente, sequi reiciendis.</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className="w-50">
                    <Col className='d-flex justify-content-center align-items-start position-relative'>
                        <motion.img
                            src='https://images.unsplash.com/photo-1574926054530-540288c8e678?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
                            alt='chicken and cream spinach'
                            className='w-100 mt-auto mb-auto rounded'
                            id='whatKeto__img'>
                        </motion.img>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default WhatIsKeto;
