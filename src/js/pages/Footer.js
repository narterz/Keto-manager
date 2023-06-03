import React from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import {FaLeaf} from 'react-icons/fa';

function Footer(){
    const footerLogo = <FaLeaf size={30} className='leafLogo'/>;

    return (
        <Container className="d-flex flex-row justify-content-center" id='footer' fluid>
            <Row className='w-75'>
                <Row className='h-75'>
                    <Col className='d-flex flex-column justify-content-between h-75'>
                        <p className='lead mt-4'>{footerLogo} Keto Manager</p>
                        <div className="w-50 d-flex justify-content-between">
                            <Button className='footer__btns'>Join Us</Button>
                            <Button className='footer__btns'>Watch Demo</Button>
                        </div>
                    </Col>
                    <Col className='d-flex flex-column justify-content-between h-75'>
                        <p className='lead mt-4'>Join Our Newsletter</p>
                        <Form className='w-100 d-flex flew-row'>
                            <Form.Control type='email' placeholder='Enter email' id='footer__sub'/>
                            <Button>Subscribe</Button>
                        </Form>
                    </Col>
                </Row>
                <hr />
                <Row className='h-25'>
                    <Col>
                        <p className='lead' id='footer__cr'>©2077 Keto Managers. All rights reserved.</p>
                    </Col>
                </Row>
            </Row>
        </Container>
    )
}

export default Footer;
