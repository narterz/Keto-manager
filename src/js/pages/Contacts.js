import React from 'react';
import { Container, Row, Col, Form, FloatingLabel, Button } from 'react-bootstrap';
import { AiFillPhone } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md'
import { HiMapPin } from 'react-icons/hi2';

function Contact() {

    const phoneLogo = <AiFillPhone size={30} className='contact__icon' />
    const emailLogo = <MdEmail size={30} className='contact__icon' />
    const pinLogo = <HiMapPin size={30} className='contact__icon' />

    const inputCheckboxs = [
        "General Questions",
        "Job Opportunites",
        "Customer Service",
        "Other"
    ];

    return (
        <Container className="m-0 p-0" id='contact' fluid>
            <Container className="text-center d-flex align-items-center justify-content-center" id='contact__header' fluid>
                <Row className='h-75'>
                    <h2 className='display-3'>Contact</h2>
                    <p className='subtitle+' id='contact__header__subtitle'>Questions, remarks, concerns? write us a message and we will gladly answer!</p>
                </Row>
            </Container>
            <Container classname="w-75" id='contact__body'>
                <Row className='h-75 mb-5 rounded me-auto ms-auto' id='contact__card'>
                    <Col className="d-flex flex-column justify-content-evenly rounded" id='contact__info' xl={5}>
                        <Row className='mb-5' id='contact__info-header'>
                            <h4 className='display-6'>Contact Information</h4>
                            <p className='subtitle lead w-75'>Fill out our form and our team will get back to you as soon as possible.</p>
                        </Row>
                        <Row className='h-50 d-flex flex-column justify-content-evenly' id='contact__info-icons'>
                            <Col className='lead contact__icons'>{phoneLogo} +0123 4567 8910</Col>
                            <Col className='lead contact__icons'>{emailLogo} managers@ketomanagers.com</Col>
                            <Col className='lead contact__icons'>{pinLogo} 841 broadway new york</Col>
                        </Row>
                    </Col>
                    <Col className="d-flex justify-content-center rounded" id='contact__forms' xl={7}>
                        <Form className='h-100 d-flex flex-column justify-content-between'>
                            <Row className="mt-3" id="contact__forms-users">
                                <Row>
                                    <Col>
                                        <FloatingLabel label="First Name" className='contact__forms-label lead'>
                                            <Form.Control type='text' placeholder='Enter in your first name' className='contact__form-input '/>
                                        </FloatingLabel>
                                    </Col>
                                    <Col>
                                        <FloatingLabel label="Last Name" className='contact__forms-label lead'>
                                            <Form.Control type='text' placeholder='Enter in your last name' className='contact__form-input'/>
                                        </FloatingLabel>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <FloatingLabel label="Email" className='contact__forms-label lead'>
                                            <Form.Control type='email' placeholder='Enter in your email' className='contact__form-input'/>
                                        </FloatingLabel>
                                    </Col>
                                    <Col>
                                        <FloatingLabel label="Phone" className='contact__forms-label lead'>
                                            <Form.Control type='tel' placeholder='Enter in your phone' className='contact__form-input'/>
                                        </FloatingLabel>
                                    </Col>
                                </Row>
                            </Row>
                            <Row id="contact__forms-checkbox">
                                <p className='lead'>What are you inquring about?</p>
                                <Col className='d-flex flex-row justify-content-between lead'>
                                    {inputCheckboxs.map((input, i) => {
                                        return (
                                            <Form.Check
                                                className='form-checks'
                                                type='checkbox'
                                                key={i}
                                                id={"checkbox" + i}
                                                label={input}
                                            />
                                        )
                                    })}
                                </Col>
                            </Row>
                            <Row id='contact__forms-textarea'>
                                <FloatingLabel label="Enter your message" className='contact__forms-label lead'>
                                    <Form.Control as='textarea' rows={3} className='contact__form-input'/>
                                </FloatingLabel>
                            </Row>
                            <Row className='d-flex justify-content-end align-items-end' id='contact__forms-btn'>
                                <Button className='h-75 mb-3 lead' id='forms-btn'>Send Message</Button>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default Contact