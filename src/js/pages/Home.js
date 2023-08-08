import React from 'react';
import { motion } from 'framer-motion';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-scroll';

//TODO
    //Add implementation to hero buttons
    //what is keto button should scroll user to the what keto section
    //view all meals should scroll users to the keto meal section

const titleVariant = {
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.8,
            staggerChildren: 0.3,
        }
    },
    hidden: {
        opacity: 0,
        x: -100
    }
}

function Home() {
    return (
        <Container id='home' className="d-flex flex-wrap align-items-center justify-content-center me-0 p-0" fluid>
            <Row className='d-flex flex-col justify-content-evenly text-center h-25 w-100 mt-5'>
                <Col className="hero-con h-100 text-center d-flex justify-content-center flex-col mt-5" xl={6}>
                    <motion.h1
                        className='display-1 h-50'
                        initial='hidden'
                        animate='visible'
                        variants={titleVariant}>
                        Discover <b>tasty</b> and healthy meals for your keto journey
                    </motion.h1>
                </Col>
            </Row>
            <Row className='d-flex flex-row align-items-center w-50'>
                <Col className='d-flex justify-content-between'>
                    <a href="https://foodinsight.org/keto-diet-101-what-to-know-before-you-commit/" className='w-100'>
                        <Button className='btn-lg lead w-25'>What is Keto?</Button>
                    </a>
                    <Link 
                        className='link w-25'
                        to='meal'
                        duration={500}
                        offset={-55}
                        smooth={true}
                    >
                        <Button className='btn-lg lead w-100'>View meals</Button>
                    </Link>
                </Col>
            </Row>
            <Container className="m-0 p-0 mt-0" id='home--divider-bottom' fluid>
                <svg classname="yo" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                </svg>
            </Container>
        </Container>
    )
}

export default Home;