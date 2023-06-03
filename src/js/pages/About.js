import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import { useAnimation, motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { AiOutlineArrowDown } from 'react-icons/ai';
import { FaLeaf } from 'react-icons/fa';

function About() {
    const arrowDown = <AiOutlineArrowDown />;
    const logo = <FaLeaf style={{ color: "#9dca00" }} />;

    const imageVariants = {
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
        hidden: { opacity: 0, y: -100 }
    }

    const control = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        inView ? control.start('visible') : control.start('hidden')
    }, [inView, control]);

    return (
        <div id='about__container'>
            <Container className='d-flex flex-row' id='about'>
                <Container className='d-flex flex-column justify-content-evenly h-100'>
                    <Row>
                        <Col>
                            <h2 className='display-4'>{logo} About Us</h2>
                        </Col>
                    </Row>
                    <Row className='d-flex flex-row'>
                        <Col>
                            <h4 className='display-6'> We craft a wide variety of keto meals that can satisfy any preference</h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p className='undertext p-3 text-start lead'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, harum. Error nihil expedita reprehenderit laboriosam illo beatae modi magnam facilis!</p>
                        </Col>
                    </Row>
                    <Row className='h-25'>
                        <Col className='h-50'>
                            <Card style={{ backgroundColor: "#333333" }} id="about-card" className='d-flex justify-content-center align-items-center flex-row h-100'>
                                <Card.Link className='card-link text-decoration-none w-100 h-75 d-flex align-items-center justify-content-center lead'>Our mission {arrowDown}</Card.Link>
                                <Card.Link className='card-link text-decoration-none w-100 h-75  d-flex align-items-center justify-content-center  lead'>Our vision {arrowDown}</Card.Link>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                <Container style={{ height: '81%' }}>
                    <Row id='img-row' className='h-100'>
                        <motion.img
                            className="about-img rounded"
                            src="https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg?w=1380&t=st=1684457917~exp=1684458517~hmac=4f18cbff4d89aa563cf7c30e3ecb93f00dcdb78751cde11d99f08e2c6a9ad2f4"
                            alt="tasty avacado salad"
                            id='img-1'
                            variants={imageVariants}
                            initial='hidden'
                            animate={control}
                            ref={ref} />
                        <motion.img
                            className="about-img rounded"
                            src="https://img.freepik.com/free-photo/fresh-healthy-food-avocabo-brussel-sprouts-cucumbers-red-yellow-green-peppers_8353-8736.jpg?w=1380&t=st=1684457989~exp=1684458589~hmac=9b4d312eb84b640eba63c8dc2e909e64847ff23dc349ff73c46e5ad2b5a5fe51"
                            alt="plate of shrimp scampi"
                            id='img-2'
                            variants={imageVariants}
                            initial='hidden'
                            animate={control}
                            ref={ref} />
                    </Row>
                </Container>
            </Container>
        </div>
    )
};

export default About;